"use client"
import React from 'react'
import SearchBar from './SearchBar'
import TopicSelector from './TopicSelector'
import { useRouter, useSearchParams } from 'next/navigation'
import { PreprAllBlogPostsQuery_Blogs_Blogs } from '@/server/prepr/generated/preprAPI.schema'
import { Categorie } from '@/types/categorie'
import PaginationComponent from '../Pagination/PaginationComponent'
import BlogPostList from '../BlogPostList/BlogPostList'

interface ArchiveListProps {
    categories: Categorie[]
    blogPosts: PreprAllBlogPostsQuery_Blogs_Blogs | undefined
}

const getQueryParams = (
    search: string | null,
    page: number | null,
    category: string | null
) => {
    const params = new URLSearchParams();

    if (search && search !== '' && search !== 'null') {
        params.set('search', search);
    }

    if (page && page > 1 && page !== null) {
        params.set('page', page.toString());
    }

    if (category && category !== '' && category !== 'null') {
        params.set('category', category);
    }

    return params.toString();
}


const ArchiveList: React.FC<ArchiveListProps> = ({
    categories,
    blogPosts
}) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const itemsPerPage = 2;

    const selectedCategory = searchParams.get('category');
    const page = searchParams.get('page');
    const search = searchParams.get('search');


    const filteredBlogPosts: PreprAllBlogPostsQuery_Blogs_Blogs['items'] = (blogPosts?.items ?? []).filter((blog) => {
        let includesSelectedCategory = false;
        let includesSearch = false;

        if (selectedCategory && selectedCategory !== 'null') {
            includesSelectedCategory = blog.categories.some((category) => category.slug === selectedCategory);
        } else {
            includesSelectedCategory = true;
        }

        if (search && search !== 'null') {
            includesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
        } else {
            includesSearch = true;
        }

        return includesSelectedCategory && includesSearch;
    });

    const lastItemIndex = parseInt(page || '1') * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;

    const currentItems: PreprAllBlogPostsQuery_Blogs_Blogs['items'] = filteredBlogPosts.slice(
        firstItemIndex,
        lastItemIndex
    );

    return (
        <div className='pb-20'>
            <SearchBar
                onChange={(value) => {
                    router.push(`?${getQueryParams(
                        value,
                        1,
                        selectedCategory
                    )}`, { scroll: false })
                }}
                value={search || null}
            />
            <div className='pt-8 pb-20 container'>
                <TopicSelector
                    categories={categories}
                    value={selectedCategory}
                    onChange={(category_slug) => {
                        router.push(`?${getQueryParams(
                            search,
                            1,
                            category_slug
                        )}`, { scroll: false })
                    }}
                />

                {!currentItems || currentItems.length === 0 ? (
                    <div className='flex flex-col justify-center items-center text-center min-h-80'>
                        <h4 className='text-xl sm:text-2xl text-primary'>
                            No blog posts found
                        </h4>
                    </div>
                ) : (
                    <BlogPostList blogPosts={currentItems} />
                )}
            </div>

            <PaginationComponent
                totalItems={filteredBlogPosts.length || 0}
                itemsPerPage={itemsPerPage}
                currentPage={parseInt(page || '1')}
                setCurrentPage={(page) => {
                    router.push(`?${getQueryParams(
                        search,
                        page,
                        selectedCategory
                    )}`, { scroll: false })
                }}
            />
        </div>
    )
}

export default ArchiveList
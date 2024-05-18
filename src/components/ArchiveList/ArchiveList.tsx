'use client';

import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import type { PreprAllBlogPostsQuery_Blogs_Blogs } from '@/server/prepr/generated/preprAPI.schema';
import type { Categorie } from '@/types/categorie';

import BlogPostList from '../BlogPostList/BlogPostList';
import PaginationComponent from '../Pagination/PaginationComponent';
import SearchBar from './SearchBar';
import TopicSelector from './TopicSelector';

interface ArchiveListProps {
  categories: Categorie[];
  blogPosts: PreprAllBlogPostsQuery_Blogs_Blogs | undefined;
}

const getQueryParams = (
  search: string | null | undefined,
  page: number | null | undefined,
  category: string | null | undefined,
) => {
  const params = new URLSearchParams();

  if (search && search !== '' && search !== 'null') {
    params.set('search', search);
  }

  if (page && page > 1) {
    params.set('page', page.toString());
  }

  if (category && category !== '' && category !== 'null') {
    params.set('category', category);
  }

  return params.toString();
};

const ArchiveList: React.FC<ArchiveListProps> = ({ categories, blogPosts }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const itemsPerPage = 9;

  // Get the selected category and page from the URL
  const selectedCategory = searchParams.get('category');
  const page = searchParams.get('page');
  const search = searchParams.get('search');

  // Filter the blog posts based on the selected category and search query
  const filteredBlogPosts: PreprAllBlogPostsQuery_Blogs_Blogs['items'] = (
    blogPosts?.items ?? []
  ).filter((blog) => {
    let includesSelectedCategory = false;
    let includesSearch = false;

    // Check if the blog post includes the selected category if not add no category to url
    if (selectedCategory && selectedCategory !== 'null') {
      includesSelectedCategory = blog.categories.some(
        (category) => category.slug === selectedCategory,
      );
    } else {
      includesSelectedCategory = true;
    }

    // Check if the blog post includes the search query if not add no search to url
    includesSearch =
      search && search !== 'null' ? blog.title.toLowerCase().includes(search.toLowerCase()) : true;

    return includesSelectedCategory && includesSearch;
  });

  // Get the current items based on the page and items per page for pagination
  const lastItemIndex = Number.parseInt(page || '1') * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems: PreprAllBlogPostsQuery_Blogs_Blogs['items'] = filteredBlogPosts.slice(
    firstItemIndex,
    lastItemIndex,
  );

  return (
    <div className="pb-20">
      <SearchBar
        onChange={(value) => {
          router.push(`?${getQueryParams(value, 1, selectedCategory)}`, { scroll: false });
        }}
        value={search || undefined}
      />

      <div className="container pb-20 pt-8">
        <TopicSelector
          categories={categories}
          value={selectedCategory}
          onChange={(category_slug) => {
            router.push(`?${getQueryParams(search, 1, category_slug)}`, { scroll: false });
          }}
        />

        {currentItems.length === 0 ? (
          <div className="flex min-h-80 flex-col items-center justify-center text-center">
            <h4 className="text-xl text-primary sm:text-2xl">No blog posts found</h4>
          </div>
        ) : (
          <BlogPostList blogPosts={currentItems} />
        )}
      </div>

      <PaginationComponent
        totalItems={filteredBlogPosts.length || 0}
        itemsPerPage={itemsPerPage}
        currentPage={Number.parseInt(page || '1')}
        setCurrentPage={(page) => {
          router.push(`?${getQueryParams(search, page, selectedCategory)}`, { scroll: false });
        }}
      />
    </div>
  );
};

export default ArchiveList;

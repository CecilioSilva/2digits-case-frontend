"use client"
import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import TopicSelector from './TopicSelector'
import PaginatedBlogPostList from './PaginatedBlogPostList'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../Pagination/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { PreprAllBlogPostsQuery_Blogs_Blogs } from '@/server/prepr/generated/preprAPI.schema'
import { Categorie } from '@/types/categorie'

interface ArchiveListProps {
    categories: Categorie[]
    blogPosts: PreprAllBlogPostsQuery_Blogs_Blogs | undefined
}

const ArchiveList: React.FC<ArchiveListProps> = ({
    categories,
    blogPosts
}) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <div>
            <SearchBar onChange={(value) => {
                router.push(pathname + '?' + createQueryString('search', value))
            }} />
            <div className='pt-8 pb-20 container'>
                <TopicSelector categories={categories} onChange={(id) => {
                    if (id) {
                        router.push(pathname + '?' + createQueryString('category', id.toString()))
                    } else {
                        router.push(pathname)
                    }
                }} />
            </div>
            <PaginatedBlogPostList
                page={parseInt(searchParams.get('page') || "1")}
                categoryId={searchParams.get('category')}
                searchValue={searchParams.get('search') || ""}
            />
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </div>
    )
}

export default ArchiveList
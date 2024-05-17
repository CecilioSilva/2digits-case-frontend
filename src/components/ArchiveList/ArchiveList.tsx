"use client"
import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { BlogCategory } from '@/types/BlogPost'
import TopicSelector from './TopicSelector'
import PaginatedBlogPostList from './PaginatedBlogPostList'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../Pagination/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface ArchiveListProps {
    categories: BlogCategory[]
}

const ArchiveList: React.FC<ArchiveListProps> = ({
    categories
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
                categoryId={searchParams.get('category') ? parseInt(searchParams.get('category')!) : null}
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
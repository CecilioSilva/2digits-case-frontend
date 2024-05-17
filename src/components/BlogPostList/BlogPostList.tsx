"use client"
import { fetchBlogPosts } from '@/api/fetchBlogPosts';
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import LoadMoreButton from './LoadMoreButton';

const BlogPostList = () => {
    const { data, status, error, hasNextPage, fetchNextPage, fetchStatus } = useInfiniteQuery({
        queryKey: ['blogPosts', { page: 1 }],
        queryFn: ({ pageParam }) => fetchBlogPosts({ page: pageParam, perPage: 3 }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return (lastPage.current_page < lastPage.last_page) ? lastPage.current_page + 1 : null;
        }
    });

    if (status === 'pending') return <div className='text-center'>Loading...</div>;

    if (status === 'error') return <div className='text-center'>{error.message}</div>;

    return (
        <div className='flex flex-col gap-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto'>
                {data.pages.map((page) => {
                    return page.data.map((post) => {
                        return (
                            <BlogPostCard key={post.id} post={post} />
                        )
                    })
                })}
            </div>
            {
                hasNextPage && <LoadMoreButton
                    onClick={() => fetchNextPage()}
                    active={fetchStatus === 'idle'}
                />
            }
        </div>
    )
}

export default BlogPostList
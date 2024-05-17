import { fetchBlogPosts } from '@/api/fetchBlogPosts';
import React from 'react'
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import { BlogPostResponse } from '@/types/BlogPost';

interface RelatedPostsListProps {
    categoryId: number;
    currentPostId: number;
}

const RelatedPostsList: React.FC<RelatedPostsListProps> = async ({
    categoryId,
    currentPostId,
}) => {
    const response = await fetch(
        `${process.env.API_HOST}/posts?perPage=4&categoryId=${categoryId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: process.env.API_KEY ?? "",
            },
            cache: "force-cache",
        }
    );

    if (!response.ok) {
        return <div>
            Failed to fetch related posts
        </div>
    }

    const posts: BlogPostResponse = await response.json();
    const filteredPosts = posts.data.filter((post) => post.id !== currentPostId).slice(0, 3);


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto'>
            {filteredPosts.map((post) => {
                return (
                    <BlogPostCard key={post.id} post={post} />
                )
            })}
        </div>
    )
}

export default RelatedPostsList
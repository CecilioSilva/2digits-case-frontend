import React from 'react'
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import { PreprSdk } from '@/server/prepr';
import type { PreprBlog } from '@/server/prepr/generated/preprAPI.schema';

const BlogPostList = async () => {
    const { Blogs } = await PreprSdk.LatestBlogPosts();

    if (!Blogs || Blogs.items.length === 0) {
        return (
            <div className='flex flex-col justify-center items-center text-center min-h-80'>
                <h4 className='text-xl sm:text-2xl text-primary'>
                    No blog posts found
                </h4>
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto'>
                {Blogs.items.map((post) => {
                    return (
                        <BlogPostCard key={post._id} post={post as PreprBlog} />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogPostList
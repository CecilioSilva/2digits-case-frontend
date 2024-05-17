import React from 'react'
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import type { PreprAllBlogPostsQuery_Blogs_Blogs_items_Blog, PreprBlog, PreprLatestBlogPostsQuery_Blogs_Blogs_items_Blog } from '@/server/prepr/generated/preprAPI.schema';

interface BlogPostListProps {
    blogPosts: PreprLatestBlogPostsQuery_Blogs_Blogs_items_Blog[] | PreprAllBlogPostsQuery_Blogs_Blogs_items_Blog[]
}

const BlogPostList: React.FC<BlogPostListProps> = ({
    blogPosts
}) => {


    if (!blogPosts || blogPosts.length === 0) {
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
                {blogPosts.map((post) => {
                    return (
                        <BlogPostCard key={post._slug} post={post as PreprBlog} />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogPostList
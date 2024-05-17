import React from 'react';

import type {
  PreprAllBlogPostsQuery_Blogs_Blogs_items_Blog,
  PreprBlog,
  PreprLatestBlogPostsQuery_Blogs_Blogs_items_Blog,
} from '@/server/prepr/generated/preprAPI.schema';

import BlogPostCard from '../BlogPostCard/BlogPostCard';

interface BlogPostListProps {
  blogPosts:
    | PreprLatestBlogPostsQuery_Blogs_Blogs_items_Blog[]
    | PreprAllBlogPostsQuery_Blogs_Blogs_items_Blog[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ blogPosts }) => {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center text-center">
        <h4 className="text-xl text-primary sm:text-2xl">No blog posts found</h4>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts.map((post) => {
          return <BlogPostCard key={post._slug} post={post as PreprBlog} />;
        })}
      </div>
    </div>
  );
};

export default BlogPostList;

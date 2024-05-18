import React from 'react';

import type {
  PreprBlog,
  PreprBlogPostQuery_Blog_Blog_related_blogs_Blog,
} from '@/server/prepr/generated/preprAPI.schema';

import BlogPostCard from '../BlogPostCard/BlogPostCard';

interface RelatedPostsListProps {
  props: PreprBlogPostQuery_Blog_Blog_related_blogs_Blog[];
}

const RelatedPostsList: React.FC<RelatedPostsListProps> = ({ props }) => {
  if (props.length === 0) {
    return;
  }

  return (
    <div className=" bg-offwhite py-16">
      <div className="container space-y-4">
        <h2 className=" font-barlow text-4xl text-primary">Related blogs</h2>

        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Only show a maximum of 3 */}
          {props.slice(0, 3).map((post) => {
            return <BlogPostCard key={post.title} post={post as PreprBlog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedPostsList;

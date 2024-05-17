import React from 'react'
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import { PreprBlog, PreprBlogPostQuery_Blog_Blog_related_blogs_Blog } from '@/server/prepr/generated/preprAPI.schema';

interface RelatedPostsListProps {
    props: PreprBlogPostQuery_Blog_Blog_related_blogs_Blog[]
}

const RelatedPostsList: React.FC<RelatedPostsListProps> = async ({
    props
}) => {

    if (props.length === 0) {
        return null;
    };

    return (
        <div className=' bg-offwhite py-16'>
            <div className="container space-y-4">
                <h2 className=' font-barlow text-primary text-4xl'>
                    Related blogs
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto'>
                    {/* Only show a maximum of 3 */}
                    {props.slice(0, 3).map((post) => {
                        return (
                            <BlogPostCard key={post.title} post={post as PreprBlog} />
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default RelatedPostsList
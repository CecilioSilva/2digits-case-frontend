import { BlogPost } from '@/types/BlogPost'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

interface BlogPostCardProps {
    post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
    post
}) => {
    return (
        <article key={post.id} className='space-y-6 h-full max-w-[348px] mt-4'>
            <div className='bg-offwhite max-h-[240px] max-w-[348px] aspect-[29/20]  rounded-md relative overflow-hidden'>
                <Image
                    className='object-cover absolute inset-0 h-[240px] w-[348px] z-0'
                    src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${post.img_url}`}
                    alt={post.title}
                    width={348}
                    height={240}
                />
                <span className='absolute z-[1] leading-6 bottom-2 left-2 bg-offwhite font-fira font-medium text-xs px-4 py-1 rounded-[4px]'>
                    {post.category.name}
                </span>
            </div>
            <div>
                <h4 className='text-xl line-clamp-2 mb-[14px] leading-6'>
                    {post.title}
                </h4>
                <p className='line-clamp-3 mb-4 font-fira leading-5'>
                    {post.content}
                </p>
                <Link href={`/blogs/${post.id}`} className='flex gap-4 items-center w-min'>
                    <span className=' font-fira text-[15px] font-medium whitespace-nowrap leading-6'>Read more</span>
                    <ArrowRight size={15} />
                </Link>
            </div>
        </article>
    )
}

export default BlogPostCard
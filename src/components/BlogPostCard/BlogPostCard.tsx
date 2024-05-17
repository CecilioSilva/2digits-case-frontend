import type { PreprBlog, PreprText } from '@/server/prepr/generated/preprAPI.schema'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

interface BlogPostCardProps {
    post: Partial<PreprBlog>
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
    post
}) => {
    return (
        <article key={post._id} className='space-y-6 h-full w-full mt-4'>
            <div className='bg-offwhite  aspect-[29/20]  rounded-md relative overflow-hidden'>
                <Image
                    className='object-cover absolute inset-0 w-full h-full z-0'
                    src={post.banner_image?.url ?? ""}
                    alt={post.banner_image?.name ?? ""}
                    width={348}
                    height={240}
                    style={{
                        objectPosition: post.banner_image?.alignment
                    }}
                />

                <span className='absolute z-[1] leading-6 bottom-2 left-2 bg-offwhite font-fira font-medium text-xs px-4 py-1 rounded-[4px]'>
                    {post.categories?.[0]?.body ?? ""}
                </span>
            </div>

            <div>
                <h4 className='text-xl line-clamp-2 mb-[14px] leading-6'>
                    {post.title}
                </h4>

                <p className='line-clamp-3 mb-4 font-fira leading-5'>
                    {(post.content?.[0] as PreprText).text?.slice(0, 150) ?? ""}
                </p>

                <Link href={`/blog/${post._slug ?? ""}`} className='flex gap-4 items-center w-min'>
                    <span className=' font-fira text-[15px] font-medium whitespace-nowrap leading-6'>Read more</span>

                    <ArrowRight size={15} />
                </Link>
            </div>
        </article>
    )
}

export default BlogPostCard
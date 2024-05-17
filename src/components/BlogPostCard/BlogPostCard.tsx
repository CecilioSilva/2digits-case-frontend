import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import type { PreprBlog, PreprText } from '@/server/prepr/generated/preprAPI.schema';

interface BlogPostCardProps {
  post: Partial<PreprBlog>;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article key={post._id} className="mt-4 h-full w-full space-y-6">
      <div className="relative  aspect-[29/20]  overflow-hidden rounded-md bg-offwhite">
        <Image
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={post.banner_image?.url ?? ''}
          alt={post.banner_image?.name ?? ''}
          width={348}
          height={240}
          style={{
            objectPosition: post.banner_image?.alignment,
          }}
        />

        <span className="absolute bottom-2 left-2 z-[1] rounded-[4px] bg-offwhite px-4 py-1 font-fira text-xs font-medium leading-6">
          {post.categories?.[0]?.body ?? ''}
        </span>
      </div>

      <div>
        <h4 className="mb-[14px] line-clamp-2 text-xl leading-6">{post.title}</h4>

        <p className="mb-4 line-clamp-3 font-fira leading-5">
          {(post.content?.[0] as PreprText).text?.slice(0, 150) ?? ''}
        </p>

        <Link href={`/blog/${post._slug ?? ''}`} className="flex w-min items-center gap-4">
          <span className=" whitespace-nowrap font-fira text-[15px] font-medium leading-6">
            Read more
          </span>

          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;

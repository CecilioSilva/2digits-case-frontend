import React from 'react';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import RelatedPostsList from '@/components/RelatedPostsList/RelatedPostsList';
import { PreprSdk } from '@/server/prepr';
import { PreprText } from '@/server/prepr/generated/preprAPI.schema';
import { cn } from '@/utils/cn';
import { sanitizeAndSerializeHTML } from '@/utils/sanitizeAndSerializeHTML';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const { slug } = params;
  if (!slug) return notFound();

  const { Blog } = await PreprSdk.BlogPost({
    slug: slug,
  });
  if (!Blog) {
    return notFound();
  }

  const content = Blog.content?.map((content) => (content as PreprText).html ?? '').join('') ?? '';

  return (
    <main className="flex-1">
      <section
        id="hero"
        className={cn(
          'relative flex min-h-[252px] flex-col items-center justify-center brightness-75 md:h-[300px] lg:h-[452px]',
        )}>
        {Blog.banner_image.url && (
          <Image
            src={Blog.banner_image.url}
            alt={Blog.banner_image.name || 'Banner Image'}
            layout="fill"
            objectFit="cover"
            className="z-0"
            style={{
              objectPosition: Blog.banner_image?.alignment,
            }}
          />
        )}
      </section>
      <div className="container">
        <article className="mx-auto max-w-[823px] space-y-8 py-16">
          <div className="space-y-2">
            <div className="flex gap-2">
              {Blog.categories.map((category) => (
                <span
                  key={category._id}
                  className="rounded-[4px] bg-offwhite px-4 py-2 font-fira text-xs font-medium">
                  {category.body}
                </span>
              ))}
            </div>
            <h1 className="text-3xl text-primary lg:text-5xl">{Blog.title}</h1>
          </div>
          <div className="prose max-w-[823px] font-fira prose-headings:font-barlow prose-headings:text-primary">
            {sanitizeAndSerializeHTML(content)}
          </div>
        </article>
      </div>
      <RelatedPostsList props={Blog.related_blogs} />
    </main>
  );
};

export default BlogPage;

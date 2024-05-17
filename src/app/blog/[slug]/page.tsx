import Hero from '@/components/Hero/Hero';
import { PreprSdk } from '@/server/prepr';
import { cn } from '@/utils/cn';
import { notFound } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import { PreprText } from '@/server/prepr/generated/preprAPI.schema';
import RelatedPostsList from '@/components/RelatedPostsList/RelatedPostsList';
import { sanitizeAndSerializeHTML } from '@/utils/sanitizeAndSerializeHTML';

interface BlogPageProps {
    params: {
        slug: string
    }
}


const BlogPage: React.FC<BlogPageProps> = async ({
    params
}) => {
    const { slug } = params;
    if (!slug) return notFound();

    const { Blog } = await PreprSdk.BlogPost({
        slug: slug,
    });
    if (!Blog) {
        return notFound();
    }

    const content = Blog.content?.map((content) => (content as PreprText).html ?? "").join('') ?? "";

    return (
        <main className='flex-1'>
            <section
                id="hero"
                className={cn('relative flex flex-col justify-center items-center min-h-[252px] md:h-[300px] lg:h-[452px] brightness-75')}
            >
                {Blog.banner_image.url && (<Image
                    src={Blog.banner_image.url}
                    alt={Blog.banner_image.name || 'Banner Image'}
                    layout='fill'
                    objectFit='cover'
                    className='z-0'
                    style={{
                        objectPosition: Blog.banner_image?.alignment
                    }}
                />)}
            </section>
            <div className='container'>
                <article className='py-16 mx-auto max-w-[823px] space-y-8'>
                    <div className='space-y-2'>
                        <div className='flex gap-2'>
                            {Blog.categories.map((category) => (
                                <span key={category._id} className='bg-offwhite font-fira font-medium text-xs px-4 py-2 rounded-[4px]'>
                                    {category.body}
                                </span>
                            ))}
                        </div>
                        <h1 className='text-3xl lg:text-5xl text-primary'>{Blog.title}</h1>
                    </div>
                    <div
                        className='prose max-w-[823px] prose-headings:text-primary font-fira prose-headings:font-barlow'
                    >
                        {sanitizeAndSerializeHTML(content)}
                    </div>
                </article>
            </div>
            <RelatedPostsList
                props={Blog.related_blogs}
            />
        </main>
    )
}

export default BlogPage
import { notFound } from 'next/navigation';

import BlogPostList from '@/components/BlogPostList/BlogPostList';
import Hero from '@/components/Hero/Hero';
import { PreprSdk } from '@/server/prepr';

export default async function Home() {
  const { Page } = await PreprSdk.Page({
    slug: '/',
  });
  const { Blogs } = await PreprSdk.LatestBlogPosts();

  if (!Page) return notFound();

  return (
    <main className="flex-1">
      <Hero header={Page.page_header} sectionClassName="min-h-[400px] md:min-h-[600px]" />

      <div className="container max-w-[1109px] space-y-8 py-20">
        <h2 className=" text-center text-4xl text-primary sm:text-start sm:text-5xl">
          The latest blogposts
        </h2>

        <BlogPostList blogPosts={Blogs?.items ?? []} />
      </div>
    </main>
  );
}

import BlogPostList from "@/components/BlogPostList/BlogPostList";
import Hero from "@/components/Hero/Hero";
import { PreprSdk } from "@/server/prepr";
import { notFound } from "next/navigation";
// import { PreprSdk } from '@/server/prepr';

export default async function Home() {
  const { Page } = await PreprSdk.Page({
    slug: "/",
  });

  if (!Page) return notFound();


  return (
    <main className="flex-1">
      <Hero
        header={Page.page_header}
        sectionClassName="min-h-[400px] md:min-h-[600px]"
      />

      <div className="container max-w-[1109px] py-20 space-y-8">
        <h2 className=" text-4xl sm:text-5xl text-primary text-center sm:text-start">The latest blogposts</h2>

        <BlogPostList />
      </div>
    </main>
  );
}

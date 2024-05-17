import BlogPostList from "@/components/BlogPostList/BlogPostList";
import Hero from "@/components/Hero/Hero";
// import { PreprSdk } from '@/server/prepr';

export default async function Home() {
  return (
    <main className="flex-1">
      <Hero
        image={'/assets/homepage_hero.png'}
        title={'Welcome to the 2DIGITS case!'}
        description="This case dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus."
        sectionClassName="min-h-[400px] md:min-h-[600px]"
      />

      <div className="container max-w-[1109px] py-20 space-y-8">
        <h2 className=" text-4xl sm:text-5xl text-primary text-center sm:text-start">De nieuwste blogs</h2>

        {/* <BlogPostList /> */}
      </div>
    </main>
  );
}

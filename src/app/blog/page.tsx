import React from 'react';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

import ArchiveList from '@/components/ArchiveList/ArchiveList';
import Hero from '@/components/Hero/Hero';
import { PreprSdk } from '@/server/prepr';
import { getAllBlogCategories } from '@/utils/getAllBlogCategories';

export const metadata: Metadata = {
  title: 'Blog archive - 2 Digits - Development Agency',
  description:
    '2 Digits is a development agency that specializes in building web applications and websites.',
};

const BlogArchive = async () => {
  const { Page } = await PreprSdk.Page({
    slug: 'blog',
  });

  if (!Page) return notFound();

  const { Blogs } = await PreprSdk.AllBlogPosts();

  const categories = getAllBlogCategories(Blogs);

  return (
    <main className="flex-1">
      <Hero header={Page.page_header} sectionClassName="h-[300px]" />

      <ArchiveList blogPosts={Blogs} categories={categories} />
    </main>
  );
};

export default BlogArchive;

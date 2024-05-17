import { PreprAllBlogPostsQuery_Blogs_Blogs } from '@/server/prepr/generated/preprAPI.schema';
import { Categorie } from '@/types/categorie';

export const getAllBlogCategories = (
  blogPosts: PreprAllBlogPostsQuery_Blogs_Blogs | undefined,
): Categorie[] => {
  const categories: Categorie[] = [];
  if (blogPosts) {
    const categorieKeys = new Set();
    blogPosts.items.forEach((blog) => {
      blog.categories.forEach((categorie) => {
        if (!categorieKeys.has(categorie.slug)) {
          categorieKeys.add(categorie.slug);
          categories.push({
            slug: categorie.slug ?? '',
            title: categorie.body ?? '',
          });
        }
      });
    });
  }

  return categories;
};

import type { PreprAllBlogPostsQuery_Blogs_Blogs } from '@/server/prepr/generated/preprAPI.schema';
import type { Categorie } from '@/types/categorie';

//Function to get all blog categories from the blog posts data
export const getAllBlogCategories = (
  blogPosts: PreprAllBlogPostsQuery_Blogs_Blogs | undefined,
): Categorie[] => {
  const categories: Categorie[] = [];
  if (blogPosts) {
    const categorieKeys = new Set();

    // Loop through all blog posts and add the categories to the categories array
    for (const blog of blogPosts.items) {
      for (const categorie of blog.categories) {
        if (!categorieKeys.has(categorie.slug)) {
          categorieKeys.add(categorie.slug);
          categories.push({
            slug: categorie.slug ?? '',
            title: categorie.body ?? '',
          });
        }
      }
    }
  }

  return categories;
};

import { PreprSdk } from '@/server/prepr';
import type { Route } from '@/types/route';

// Function to get the navigation routes from the Prepr API
export const getNavigationRoutes = async (slug: 'header' | 'footer'): Promise<Route[]> => {
  const { Navigation } = await PreprSdk.Navigation({
    slug,
  });

  if (!Navigation) return [];

  // Map the navigation items to routes
  const routes: Route[] = Navigation.items.map((item) => {
    const slug = item.link_to_page[0]?._slug || '/';

    return {
      name: item.title,
      path: slug.startsWith('/') ? slug : `/${slug}`,
    };
  });

  return routes;
};

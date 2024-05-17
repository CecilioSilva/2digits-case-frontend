import { PreprSdk } from '@/server/prepr';
import type { Route } from '@/types/route';

export const getNavigationRoutes = async (slug: 'header' | 'footer'): Promise<Route[]> => {
  const { Navigation } = await PreprSdk.Navigation({
    slug,
  });

  if (!Navigation) return [];

  const routes: Route[] = Navigation.items.map((item) => ({
    name: item.title,
    path: item.link_to_page[0]?._slug || '/',
  }));

  return routes;
};

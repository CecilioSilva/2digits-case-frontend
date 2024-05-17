import React from 'react';

import { getNavigationRoutes } from '@/services/getNavigationRoutes';

import FooterLink from './FooterLink';

const Footer = async () => {
  const routes = await getNavigationRoutes('footer');

  return (
    <footer className="bg-headerGradient">
      <ul className="container flex items-center justify-center gap-9 py-8 text-lg sm:justify-start sm:gap-[46px]">
        {routes.map((route) => (
          <FooterLink key={route.path} {...route} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

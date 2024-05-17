import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { getNavigationRoutes } from '@/services/getNavigationRoutes';

import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

const Header = async () => {
  const routes = await getNavigationRoutes('header');

  return (
    <header className="bg-headerGradient">
      <div className="container flex items-center justify-between py-6">
        <Link href="/">
          <Image
            src={'/assets/logo.png'}
            loading="eager"
            priority
            alt={'logo'}
            width={210}
            height={32}
          />
        </Link>

        <ul className="hidden items-center gap-8 text-lg sm:flex">
          {routes.map((route) => (
            <NavItem key={route.path} {...route} />
          ))}
        </ul>

        <MobileMenu routes={routes} />
      </div>
    </header>
  );
};

export default Header;

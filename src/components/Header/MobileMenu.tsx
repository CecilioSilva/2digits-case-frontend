'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { MenuIcon, XIcon } from 'lucide-react';

import type { Route } from '@/types/route';

interface MobileMenuProps {
  routes: Route[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ routes }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    // Prefetch all routes when the component is mounted to improve navigation speed
    // Next Link does this automatically, but we need to do it manually for the mobile menu
    // Because we are closing the menu when a link is clicked
    routes.map((route) => {
      router.prefetch(route.path);
    });
  }, [routes, router]);

  return (
    <>
      <button onClick={toggleMenu} className="p-1 text-light sm:hidden" aria-label="Open the menu">
        {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
      </button>

      <div
        aria-hidden={!isOpen}
        className="absolute inset-0 z-10 flex flex-col items-center justify-between border-y-4 border-primary bg-light px-2 py-8 transition-transform duration-700"
        style={{
          transform: `translateX(${isOpen ? '0' : '-100%'})`,
        }}>
        <div className="flex flex-col gap-6">
          <Image
            src={'/assets/logo_blue.png'}
            loading="eager"
            alt={'logo'}
            width={210}
            height={32}
          />

          <ul className="text-center" role="navigation">
            {routes.map((route) => (
              <li key={route.path} className="text-lg text-primary">
                <button
                  onClick={() => {
                    closeMenu();
                    router.push(route.path);
                  }}
                  role="link"
                  aria-label={route.name}
                  className="hover:underline">
                  {route.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={closeMenu}
          className="flex items-center justify-center gap-2 rounded-sm p-2 text-primary">
          Close
          <XIcon size={24} />
        </button>
      </div>
    </>
  );
};

export default MobileMenu;

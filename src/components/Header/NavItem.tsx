import React from 'react';

import Link from 'next/link';

interface NavItemProps {
  name: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  return (
    <li className="text-light hover:underline">
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default NavItem;

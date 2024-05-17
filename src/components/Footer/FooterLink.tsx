import React from 'react';

import Link from 'next/link';

interface FooterLinkProps {
  name: string;
  path: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ name, path }) => {
  return (
    <li className="font-fira text-xs font-normal text-light hover:underline">
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default FooterLink;

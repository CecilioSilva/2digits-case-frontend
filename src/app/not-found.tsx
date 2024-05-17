import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const notFound = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-3">
      <Image
        src="/assets/not-found.svg"
        alt="404"
        width={300}
        height={300}
        className=" size-[200] lg:size-[300]"
      />

      <div className="text-center">
        <h2 className=" text-xl text-primary">Page not found</h2>

        <p className="text-center font-fira text-primary">
          The page you are looking for does not exist.
        </p>
      </div>

      <Link
        href={'/'}
        className=" mt-4 rounded-sm bg-primary px-3 py-2 font-fira text-white hover:brightness-75">
        Go back home
      </Link>
    </div>
  );
};

export default notFound;

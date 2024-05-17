import React from 'react';

import Image from 'next/image';

import type { PreprPageHeader } from '@/server/prepr/generated/preprAPI.schema';
import { cn } from '@/utils/cn';

interface HeroProps {
  header: Partial<PreprPageHeader> | undefined;
  className?: string;
  sectionClassName?: string;
}

const Hero: React.FC<HeroProps> = ({ header, className, sectionClassName }) => {
  if (!header) return;

  const { image, title, text } = header;
  return (
    <section
      id="hero"
      className={cn('relative flex flex-col items-center justify-center', sectionClassName)}>
      {image?.url && (
        <Image
          src={image.url}
          alt={image.name ?? title ?? 'Header image'}
          fill
          className="z-0 object-cover"
          style={{
            objectPosition: image?.alignment,
          }}
        />
      )}

      <div
        className={cn(
          'container relative max-w-xl space-y-4 py-12 text-center font-barlow text-light sm:space-y-8 md:max-w-[823px] md:py-20',
          className,
        )}>
        <h1 className="text-4xl uppercase sm:text-5xl md:text-7xl">{title}</h1>

        <p className="text-sm sm:text-base md:text-lg">{text}</p>
      </div>
    </section>
  );
};

export default Hero;

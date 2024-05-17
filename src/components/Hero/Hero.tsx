import type { PreprPageHeader } from '@/server/prepr/generated/preprAPI.schema'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import React from 'react'

interface HeroProps {
    header: Partial<PreprPageHeader> | undefined
    className?: string
    sectionClassName?: string
}

const Hero: React.FC<HeroProps> = ({
    header,
    className,
    sectionClassName
}) => {
    if (!header) return;

    const { image, title, text } = header;
    return (
        <section
            id="hero"
            className={cn('relative flex flex-col justify-center items-center', sectionClassName)}
        >
            {image?.url && <Image src={image.url} alt={image.name ?? title ?? "Header image"} layout='fill' objectFit='cover' className='z-0' />}

            <div className={cn('container max-w-xl md:max-w-[823px] py-12 md:py-20 space-y-4 sm:space-y-8 text-center relative font-barlow text-light', className)}>
                <h1 className='text-4xl sm:text-5xl md:text-7xl uppercase'>
                    {title}
                </h1>

                <p className='text-sm sm:text-base md:text-lg'>
                    {text}
                </p>
            </div>
        </section>
    )
}

export default Hero
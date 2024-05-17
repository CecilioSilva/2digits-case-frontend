import { cn } from '@/utils/cn'
import Image from 'next/image'
import React from 'react'

interface HeroProps {
    title?: string
    description?: string
    image: string
    className?: string
    sectionClassName?: string
}

const Hero: React.FC<HeroProps> = ({
    title,
    description,
    image,
    className,
    sectionClassName
}) => {

    return (
        <section
            id="hero"
            className={cn('relative flex flex-col justify-center items-center', sectionClassName)}
        >
            <Image src={image} alt={title ?? "Hero Image"} layout='fill' objectFit='cover' className='z-0' />
            <div className={cn('container max-w-xl md:max-w-[823px] py-12 md:py-20 space-y-4 sm:space-y-8 text-center relative font-barlow text-light', className)}>
                <h1 className='text-4xl sm:text-5xl md:text-7xl uppercase'>
                    {title}
                </h1>
                <p className='text-sm sm:text-base md:text-lg'>
                    {description}
                </p>
            </div>
        </section>
    )
}

export default Hero
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <div className='container flex flex-col justify-center items-center gap-3'>
            <Image
                src='/assets/not-found.svg'
                alt='404'
                width={300}
                height={300}
                className=' lg:size-[300] size-[200]'
            />

            <div className='text-center'>
                <h2 className=' text-primary text-xl'>
                    Page not found
                </h2>

                <p className='text-center font-fira text-primary'>
                    The page you are looking for does not exist.
                </p>
            </div>

            <Link href={"/"} className=' py-2 px-3 text-white bg-primary hover:brightness-75 font-fira rounded-sm mt-4'>
                Go back home
            </Link>
        </div>
    )
}

export default notFound
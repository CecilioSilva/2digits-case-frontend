"use client"
import React, { useEffect, useState } from 'react'
import type { Route } from '@/types/route'
import { MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface MobileMenuProps {
    routes: Route[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    routes,
}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        // Prefetch all routes when the component is mounted to improve navigation speed
        routes.map((route) => {
            router.prefetch(route.path)
        });
    }, [routes, router])


    return (
        <>
            <button onClick={toggleMenu} className='sm:hidden text-light p-1' aria-label='Open the menu'>
                {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </button>

            <div
                aria-hidden={!isOpen}
                className='absolute inset-0 z-10 bg-light border-y-4 border-primary transition-transform duration-700 flex flex-col py-8 px-2 items-center justify-between'
                style={{
                    transform: `translateX(${isOpen ? '0' : '-100%'})`,
                }}
            >

                <div className='flex flex-col gap-6'>
                    <Image src={"/assets/logo_blue.png"} loading='eager' alt={"logo"} width={210} height={32} />

                    <ul className='text-center' role="navigation">
                        {routes.map((route) => (
                            <li key={route.path} className='text-primary text-lg'>
                                <button onClick={() => {
                                    closeMenu();
                                    router.push(route.path);
                                }}
                                    role='link'
                                    aria-label={route.name}
                                    className='hover:underline'
                                >
                                    {route.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <button onClick={closeMenu} className='flex gap-2 text-primary p-2 rounded-sm items-center justify-center'>
                    Close
                    <XIcon size={24} />
                </button>
            </div>
        </>
    )
}

export default MobileMenu
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import MobileMenu from './MobileMenu'
import { getNavigationRoutes } from '@/utils/getNavigationRoutes'



const Header = async () => {
    const routes = await getNavigationRoutes("header");

    return (
        <header className='bg-headerGradient'>
            <div className='container flex justify-between items-center py-6'>
                <Link href="/">
                    <Image src={"/assets/logo.png"} loading='eager' priority alt={"logo"} width={210} height={32} />
                </Link>

                <ul className='text-lg items-center gap-8 hidden sm:flex'>
                    {routes.map((route) => (<NavItem key={route.path} {...route} />))}
                </ul>

                <MobileMenu routes={routes} />
            </div>
        </header>
    )
}

export default Header
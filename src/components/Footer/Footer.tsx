import React from 'react'
import FooterLink from './FooterLink'
import { getNavigationRoutes } from '@/services/getNavigationRoutes';


const Footer = async () => {
    const routes = await getNavigationRoutes("footer");

    return (
        <footer className='bg-headerGradient'>
            <ul className='container text-lg flex items-center justify-center sm:justify-start gap-9 sm:gap-[46px] py-8'>
                {routes.map((route) => (<FooterLink key={route.path} {...route} />))}
            </ul>
        </footer>
    )
}

export default Footer
import Link from 'next/link'
import React from 'react'

interface NavItemProps {
    name: string
    path: string
}

const NavItem: React.FC<NavItemProps> = ({
    name,
    path
}) => {
    return (
        <li className='hover:underline text-light'>
            <Link href={path} >
                {name}
            </Link>
        </li>
    )
}

export default NavItem
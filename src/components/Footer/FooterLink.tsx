import Link from 'next/link'
import React from 'react'

interface FooterLinkProps {
    name: string
    path: string
}

const FooterLink: React.FC<FooterLinkProps> = ({
    name,
    path
}) => {
    return (
        <li className='hover:underline text-light font-fira font-normal text-xs'>
            <Link href={path} >
                {name}
            </Link>
        </li>
    )
}

export default FooterLink
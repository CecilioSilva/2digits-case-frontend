import React from 'react'
import FooterLink from './FooterLink'

const Footer = () => {
    return (
        <footer className='bg-headerGradient'>
            <ul className='container text-lg flex items-center justify-center sm:justify-start gap-9 sm:gap-[46px] py-8'>
                <FooterLink name="Terms and conditions" path="/terms" />
                <FooterLink name="Privacy statement" path="/privacy" />
            </ul>
        </footer>
    )
}

export default Footer
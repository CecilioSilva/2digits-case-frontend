import Hero from '@/components/Hero/Hero';
import { PreprSdk } from '@/server/prepr';
import { sanitizeAndSerializeHTML } from '@/utils/sanitizeAndSerializeHTML';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';
import React from 'react'

export const metadata: Metadata = {
    title: "Privacy Statement - 2 Digits - Development Agency",
    description: "2 Digits is a development agency that specializes in building web applications and websites.",
};

const PrivacyPage = async () => {
    const { Page } = await PreprSdk.Page({
        slug: "privacy-statement",
    });

    if (!Page) return notFound();

    return (
        <main className="flex-1">
            <Hero
                header={Page.page_header}
                sectionClassName="min-h-[300px] md:min-h-[500px]"
            />

            <div className="container max-w-[1109px] py-20 space-y-8">
                <h2 className=" text-4xl sm:text-5xl text-primary text-center sm:text-start">
                    {Page.title}
                </h2>

                <div
                    className='content font-fira space-y-4'
                >
                    {sanitizeAndSerializeHTML(Page.html)}
                </div>
            </div>
        </main>
    )
}

export default PrivacyPage
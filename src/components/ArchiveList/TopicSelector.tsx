"use client"
import React from 'react'
import { TopicButton } from './TopicButton'
import { Categorie } from '@/types/categorie'

interface TopicSelectorProps {
    categories: Categorie[]
    onChange: (value: string | null) => void
    value: string | null
}

const TopicSelector: React.FC<TopicSelectorProps> = ({
    categories,
    onChange,
    value,
}) => {

    return (
        <div className='space-y-4 pb-8'>
            <h3 className='text-lg text-primary leading-6'>
                Topics
            </h3>
            <ul className='flex gap-2 uppercase flex-wrap'>
                <TopicButton
                    name='All blogs'
                    value={null}
                    onClick={onChange}
                    selected={value === null}
                />

                {categories.map((category) => (
                    <TopicButton
                        name={category.title}
                        value={category.slug}
                        onClick={onChange}
                        selected={value === category.slug}
                        key={category.slug}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TopicSelector
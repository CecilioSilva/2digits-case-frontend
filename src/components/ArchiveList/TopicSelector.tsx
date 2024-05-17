"use client"
import { cn } from '@/utils/cn'
import React, { useEffect, useState } from 'react'
import { TopicButton } from './TopicButton'
import { Categorie } from '@/types/categorie'

interface TopicSelectorProps {
    categories: Categorie[]
    onChange: (value: string | null) => void
}

const TopicSelector: React.FC<TopicSelectorProps> = ({
    categories,
    onChange
}) => {
    const [selectedCategorie, setSelectedCategorie] = useState<string | null>(null);

    useEffect(() => {
        onChange(selectedCategorie)
    }, [selectedCategorie, onChange])

    return (
        <div className='space-y-4 pb-8'>
            <h3 className='text-lg text-primary leading-6'>
                Topics
            </h3>
            <ul className='flex gap-2 uppercase'>
                <TopicButton
                    name='All blogs'
                    value={null}
                    onClick={setSelectedCategorie}
                    selected={selectedCategorie === null}
                />

                {categories.map((category) => (
                    <TopicButton
                        name={category.title}
                        value={category.slug}
                        onClick={setSelectedCategorie}
                        selected={selectedCategorie === category.slug}
                        key={category.slug}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TopicSelector
"use client"
import { BlogCategory } from '@/types/BlogPost'
import { cn } from '@/utils/cn'
import React, { useEffect, useState } from 'react'
import { TopicButton } from './TopicButton'

interface TopicSelectorProps {
    categories: BlogCategory[]
    onChange: (value: number | null) => void
}

const TopicSelector: React.FC<TopicSelectorProps> = ({
    categories,
    onChange
}) => {
    const [selectedCategorie, setSelectedCategorie] = useState<number | null>(null);

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
                        name={category.name}
                        value={category.id}
                        onClick={setSelectedCategorie}
                        selected={selectedCategorie === category.id}
                        key={category.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TopicSelector
'use client';

import React from 'react';

import type { Categorie } from '@/types/categorie';

import { TopicButton } from './TopicButton';

interface TopicSelectorProps {
  categories: Categorie[];
  onChange: (value: string | null | undefined) => void;
  value: string | null;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ categories, onChange, value }) => {
  return (
    <div className="space-y-4 pb-8">
      <h3 className="text-lg leading-6 text-primary">Topics</h3>

      <ul className="flex flex-wrap gap-2 uppercase">
        <TopicButton name="All blogs" value={undefined} onClick={onChange} selected={!value} />

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
  );
};

export default TopicSelector;

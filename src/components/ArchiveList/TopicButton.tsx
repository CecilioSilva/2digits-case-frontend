'use client';

import { cn } from '@/utils/cn';

interface TopicButtonProps {
  name: string;
  value: string | null;
  onClick: (value: string | null) => void;
  selected: boolean;
}

export const TopicButton: React.FC<TopicButtonProps> = ({ name, value, onClick, selected }) => {
  return (
    <li>
      <button
        onClick={() => onClick(value)}
        className={cn(
          `whitespace-nowrap rounded border-2 px-4 py-2 font-fira font-medium uppercase`,
          {
            'border-transparent bg-[#371172] text-white': selected,
            'border-offwhite bg-white text-black': !selected,
          },
        )}>
        {name}
      </button>
    </li>
  );
};

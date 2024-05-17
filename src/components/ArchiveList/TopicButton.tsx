"use client"
import { cn } from "@/utils/cn";

interface TopicButtonProps {
    name: string;
    value: string | null;
    onClick: (value: string | null) => void;
    selected: boolean
}

export const TopicButton: React.FC<TopicButtonProps> = ({
    name,
    value,
    onClick,
    selected
}) => {
    return (
        <li>
            <button
                onClick={() => onClick(value)}
                className={cn(`font-fira border-2 font-medium uppercase px-4 py-2 rounded whitespace-nowrap`, {
                    'bg-[#371172] border-transparent text-white': selected,
                    'border-offwhite bg-white text-black': !selected
                })}>
                {name}
            </button>
        </li>
    )

}
import React from 'react'

interface LoadMoreButtonProps {
    onClick: () => void
    active: boolean
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
    onClick,
    active
}) => {
    return (
        <button
            className='bg-primary font-fira mx-auto hover:brightness-75 text-white px-4 py-2 w-min whitespace-nowrap'
            onClick={onClick} disabled={!active}
        >
            Load more
        </button>
    )
}

export default LoadMoreButton
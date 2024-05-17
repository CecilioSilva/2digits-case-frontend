import React from 'react'

interface PaginatedBlogPostListProps {
    page?: number
    categoryId?: number | null
    searchValue?: string
}

const PaginatedBlogPostList: React.FC<PaginatedBlogPostListProps> = ({
    page,
    categoryId,
    searchValue
}) => {
    return (
        <div className='flex gap-4 flex-col'>
            <h1 className='w-min p-3 border-2 border-red-500'>
                {page}
            </h1>
            <h1 className='w-min p-3 border-2 border-red-500'>
                {categoryId}
            </h1>
            <h1 className='w-min p-3 border-2 border-red-500'>
                {searchValue}
            </h1>
        </div>
    )
}

export default PaginatedBlogPostList
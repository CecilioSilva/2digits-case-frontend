"use client"
import useDebounce from '@/utils/useDebounce';
import React, { useEffect, useState } from 'react'

interface SearchBarProps {
    onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
    onChange
}) => {
    const [searchValue, setSearchValue] = useState('');
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        onChange(debounceValue);
    }, [debounceValue, onChange])

    return (
        <div className='bg-offwhite'>
            <div className='flex flex-col py-8 container gap-4'>
                <h2 className='text-lg'>Search for blogs</h2>
                <div className='flex gap-6'>
                    <input
                        className='font-fira py-3 px-4 flex-1'
                        type="text"
                        placeholder='Search'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                        className='py-3 px-8 font-fira text-white bg-[#371172] rounded-[3px]'
                        onClick={() => onChange(searchValue)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
"use client"
import { XIcon } from 'lucide-react'
import React, { useState } from 'react'

interface SearchBarProps {
    onChange: (value: string | null) => void
    value?: string | null
}

const SearchBar: React.FC<SearchBarProps> = ({
    onChange,
    value
}) => {
    const [searchValue, setSearchValue] = useState(value || '');

    return (
        <div className='bg-offwhite'>
            <div className='flex flex-col py-8 container gap-4'>
                <h2 className='text-lg'>Search for blogs</h2>
                <div className='flex gap-3'>
                    <input
                        className='font-fira py-3 px-4 flex-1'
                        type="text"
                        placeholder='Search'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className='flex gap-2'>
                        {searchValue && (<button
                            type='reset'
                            className='py-3 px-3 font-fira text-white bg-[#371172] rounded-[3px]'
                            onClick={() => {
                                setSearchValue('');
                                onChange(null);
                            }}
                        >
                            <XIcon size={24} />
                        </button>)}
                        <button
                            className='py-3 px-8 font-fira text-white bg-[#371172] rounded-[3px]'
                            type='button'
                            onClick={() => onChange(searchValue)}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
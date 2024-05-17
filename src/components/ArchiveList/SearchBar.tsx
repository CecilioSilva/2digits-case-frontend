'use client';

import React, { useState } from 'react';

import { XIcon } from 'lucide-react';

interface SearchBarProps {
  onChange: (value: string | null) => void;
  value?: string | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, value }) => {
  const [searchValue, setSearchValue] = useState(value || '');

  return (
    <div className="bg-offwhite">
      <div className="container flex flex-col gap-4 py-8">
        <h2 className="text-lg">Search for blogs</h2>
        <div className="flex gap-3">
          <input
            className="flex-1 px-4 py-3 font-fira"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="flex gap-2">
            {searchValue && (
              <button
                type="reset"
                className="rounded-[3px] bg-[#371172] px-3 py-3 font-fira text-white"
                onClick={() => {
                  setSearchValue('');
                  onChange(null);
                }}>
                <XIcon size={24} />
              </button>
            )}
            <button
              className="rounded-[3px] bg-[#371172] px-8 py-3 font-fira text-white"
              type="button"
              onClick={() => onChange(searchValue)}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

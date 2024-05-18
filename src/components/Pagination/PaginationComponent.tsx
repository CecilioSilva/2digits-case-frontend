import React from 'react';

import { cn } from '@/utils/cn';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../Pagination/Pagination';

interface PaginationComponentProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent className=" gap-3">
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePrevPage()} />
        </PaginationItem>

        {pages.slice(0, 3).map((page, i) => (
          <PaginationItem
            key={i}
            className={cn(
              'cursor-pointer rounded border-2 hover:brightness-90',
              currentPage === page
                ? 'border-transparent bg-[#371172]  text-white'
                : ' border-offwhite  hover:bg-offwhite/10',
            )}>
            <PaginationLink onClick={() => setCurrentPage(page)}>{page}</PaginationLink>
          </PaginationItem>
        ))}

        {pages.length > 3 && <PaginationEllipsis />}

        {pages.length > 3 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => setCurrentPage(pages.at(-1) ?? 1)}
              className={cn(
                'cursor-pointer rounded border-2 hover:brightness-90',
                currentPage === pages.at(-1)
                  ? 'border border-transparent bg-[#371172] text-white'
                  : 'border-offwhite hover:bg-offwhite/10',
              )}>
              {pages.at(-1)}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext onClick={() => handleNextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;

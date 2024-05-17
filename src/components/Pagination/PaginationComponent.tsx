import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../Pagination/Pagination'
import { cn } from '@/utils/cn'

interface PaginationComponentProps {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i);
    }

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <Pagination>
            <PaginationContent className=' gap-3'>
                <PaginationItem>
                    <PaginationPrevious onClick={() => handlePrevPage()} />
                </PaginationItem>

                {
                    pages.slice(0, 3).map((page, i) => (
                        <PaginationItem
                            key={i}
                            className={cn(
                                "rounded border-2 hover:brightness-90 cursor-pointer",
                                currentPage === page ? 'bg-[#371172] text-white  border-transparent' : ' border-offwhite  hover:bg-offwhite/10'
                            )}
                        >
                            <PaginationLink onClick={() => setCurrentPage(page)}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>

                    ))
                }

                {
                    pages.length > 3 && (
                        <PaginationEllipsis />
                    )
                }

                {
                    pages.length > 3 && (
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => setCurrentPage(pages[pages.length - 1] ?? 1)}
                                className={cn(
                                    "rounded border-2 hover:brightness-90 cursor-pointer",
                                    currentPage === pages[pages.length - 1] ? 'bg-[#371172] text-white border border-transparent' : 'border-offwhite hover:bg-offwhite/10'
                                )}
                            >
                                {pages[pages.length - 1]}
                            </PaginationLink>
                        </PaginationItem>
                    )
                }

                <PaginationItem>
                    <PaginationNext onClick={() => handleNextPage()} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationComponent
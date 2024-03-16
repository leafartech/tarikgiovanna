'use client'

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react'
import { ReactNode } from "react";

interface DropdownProps {
    children: ReactNode
    title: string
}

export default function Dropdown({ children, title }: DropdownProps) {
    const [isDropdownActived, setIsDropdownActived] = useState<boolean>(false)

    function toggleDropdown() {
        setIsDropdownActived(!isDropdownActived)
    }

    return (
        <div className="w-full max-w-xl">
            <button
                onClick={() => toggleDropdown()}
                className={`text-left w-full bg-client-pallet-2 text-white font-medium py-3 px-4 rounded-lg ${isDropdownActived && 'rounded-b-none border-b border-white'} flex items-center justify-between outline-none`}
            >
                <span>{title}</span>
                <ChevronRightIcon className={`h-4 w-4 transition ${isDropdownActived ? "rotate-90" : "rotate-0"}`} />
            </button>
            <div className={`px-6 py-4 text-white bg-client-pallet-2 rounded-b-lg ${isDropdownActived ? "block" : "hidden"}`}>
                {children}
            </div>
        </div>
    )
}
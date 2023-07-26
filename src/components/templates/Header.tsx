'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { sidebarSelector } from '../../../redux/slices/UISlice'
import { useAppSelector } from '../../../redux/store'
import { clsxm } from '../../../utils/clsxm'
import AppLogo from '../atoms/AppLogo'
import DeleteAndSaveButtons from '../atoms/DeleteAndSaveButtons'
import SidebarToggle from '../atoms/SidebarToggle'
import MarkdownFileName from '../molecules/MarkdownFileName'

const Header: React.FC = () => {
    const path = usePathname()
    const sidebar = useAppSelector(sidebarSelector)

    if (path === '/auth/signin') return null
    return (
        <header className="fixed left-0 top-0 right-0 h-[56px] md:h-[72px] bg-800 flex justify-between z-[998]">
            <div
                className={clsxm(
                    'flex space-x-3 md:space-x-6 transition-all duration-200',
                    {
                        'ml-[250px]': sidebar,
                    }
                )}
            >
                <SidebarToggle />
                <AppLogo />
                <span className="w-[1px] h-[40px] bg-600 my-auto hidden lg:block" />
                <MarkdownFileName />
            </div>
            <DeleteAndSaveButtons />
        </header>
    )
}

export default Header

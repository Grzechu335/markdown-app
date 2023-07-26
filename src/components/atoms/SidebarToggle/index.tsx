'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import {
    sidebarSelector,
    toggleSidebar,
} from '../../../../redux/slices/UISlice'
import { RxHamburgerMenu as HamburgerMenuIcon } from 'react-icons/rx'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'

const SidebarToggle: React.FC = () => {
    const dispatch = useAppDispatch()
    const sidebar = useAppSelector(sidebarSelector)

    return (
        <div
            onClick={() => {
                dispatch(toggleSidebar())
            }}
            className="grid place-content-center flex-shrink-0 w-[56px] h-[56px] md:w-[72px] md:h-[72px] bg-700 cursor-pointer hover:bg-orange transition-colors duration-200"
        >
            {!sidebar ? (
                <HamburgerMenuIcon
                    size={30}
                    color="#fff"
                />
            ) : (
                <CloseIcon
                    size={30}
                    color="#fff"
                />
            )}
        </div>
    )
}

export default SidebarToggle

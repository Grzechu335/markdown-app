'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Sidebar from '../organisms/Sidebar'
import { useAppSelector } from '../../../redux/store'
import { sidebarSelector } from '../../../redux/slices/UISlice'

const SidebarWrapper: React.FC = () => {
    const sidebar = useAppSelector(sidebarSelector)
    return <AnimatePresence>{sidebar && <Sidebar />}</AnimatePresence>
}

export default SidebarWrapper

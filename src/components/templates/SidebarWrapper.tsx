'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useSidebarContext } from '../../../context/SidebarContext'
import Sidebar from '../organisms/Sidebar'

const SidebarWrapper: React.FC = () => {
    const { open } = useSidebarContext()
    return <AnimatePresence>{open && <Sidebar />}</AnimatePresence>
}

export default SidebarWrapper

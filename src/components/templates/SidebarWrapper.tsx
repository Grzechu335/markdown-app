'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Sidebar from '../organisms/Sidebar'
import { useUIContext } from '../../../context/UIContext'

const SidebarWrapper: React.FC = () => {
    const { sidebar } = useUIContext()
    return (
        // <AnimatePresence>
        <>{sidebar && <Sidebar />}</>
        // </AnimatePresence >
    )
}

export default SidebarWrapper

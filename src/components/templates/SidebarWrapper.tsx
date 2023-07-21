'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Sidebar from '../organisms/Sidebar'
import { useUIContext } from '../../../context/UIContext'
import useGetAllFiles from '../../../hooks/useGetAllFiles'

const SidebarWrapper: React.FC = () => {
    const { files: markdowns, loading } = useGetAllFiles()

    const { sidebar } = useUIContext()
    return (
        <AnimatePresence>
            {sidebar && (
                <Sidebar
                    markdowns={markdowns}
                    loading={loading}
                />
            )}
        </AnimatePresence>
    )
}

export default SidebarWrapper

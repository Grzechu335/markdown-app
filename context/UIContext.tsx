'use client'
import React, { createContext, useContext, useMemo, useState } from 'react'

type UIContextType = {
    preview: boolean
    togglePreview: () => void
    setPreviewToValue: (open: boolean) => void
    deleteModal: boolean
    toggleDeleteModal: () => void
    sidebar: boolean
    toggleSidebar: () => void
    setSidebarValue: (value: boolean) => void
}

const UIContext = createContext<UIContextType>({
    preview: false,
    togglePreview: () => {},
    setPreviewToValue: () => {},
    deleteModal: false,
    toggleDeleteModal: () => {},
    sidebar: false,
    setSidebarValue: () => {},
    toggleSidebar: () => {},
})

export const UIContextProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [preview, setPreview] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar((prev) => !prev)
    }

    const setSidebarValue = (value: boolean) => {
        setSidebar(value)
    }

    const setPreviewToValue = (value: boolean) => {
        setPreview(value)
    }

    const togglePreview = () => {
        setPreview((prev) => !prev)
    }

    const toggleDeleteModal = () => {
        setDeleteModal((prev) => !prev)
    }

    const contextValue = useMemo(
        (): UIContextType => ({
            preview,
            deleteModal,
            sidebar,
            setPreviewToValue,
            togglePreview,
            toggleDeleteModal,
            toggleSidebar,
            setSidebarValue,
        }),
        [preview, deleteModal, sidebar]
    )

    return (
        <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
    )
}

export default UIContext

export const useUIContext = () => useContext<UIContextType>(UIContext)

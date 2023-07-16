'use client'
import React, { createContext, useContext, useMemo, useState } from 'react'

type SidebarContextType = {
    open: boolean
    toggleMenu: () => void
}

const SidebarContext = createContext<SidebarContextType>({
    open: false,
    toggleMenu: () => {},
})

export const SidebarContextProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setOpen((prev) => !prev)
    }
    const contextValue = useMemo(
        (): SidebarContextType => ({
            open,
            toggleMenu,
        }),
        [open]
    )

    return (
        <SidebarContext.Provider value={contextValue}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContext

export const useSidebarContext = () =>
    useContext<SidebarContextType>(SidebarContext)

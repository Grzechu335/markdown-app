'use client'
import React from 'react'
import { SidebarContextProvider } from '../context/SidebarContext'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class">
            <SidebarContextProvider>{children}</SidebarContextProvider>
        </ThemeProvider>
    )
}

export default Providers

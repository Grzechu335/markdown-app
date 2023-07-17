'use client'
import React from 'react'
import { SidebarContextProvider } from '../context/SidebarContext'
import { ThemeProvider } from 'next-themes'
import { MarkdownContextProvider } from '../context/MarkdownContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class">
            <SidebarContextProvider>
                <MarkdownContextProvider>{children}</MarkdownContextProvider>
            </SidebarContextProvider>
        </ThemeProvider>
    )
}

export default Providers

'use client'
import React from 'react'
import { SidebarContextProvider } from '../context/SidebarContext'
import { ThemeProvider } from 'next-themes'
import { MarkdownContextProvider } from '../context/MarkdownContext'
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                <SidebarContextProvider>
                    <MarkdownContextProvider>
                        {children}
                    </MarkdownContextProvider>
                </SidebarContextProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}

export default Providers

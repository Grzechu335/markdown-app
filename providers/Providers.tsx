'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { MarkdownContextProvider } from '../context/MarkdownContext'
import { SessionProvider } from 'next-auth/react'
import { UIContextProvider } from '../context/UIContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                <MarkdownContextProvider>
                    <UIContextProvider>{children}</UIContextProvider>
                </MarkdownContextProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}

export default Providers

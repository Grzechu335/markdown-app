'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { MarkdownContextProvider } from '../context/MarkdownContext'
import { SessionProvider } from 'next-auth/react'
import { UIContextProvider } from '../context/UIContext'
import { SkeletonTheme } from 'react-loading-skeleton'
import { RefetchProvider } from '../context/RefetchContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                <RefetchProvider>
                    <MarkdownContextProvider>
                        <SkeletonTheme
                            baseColor="#5A6069"
                            highlightColor="#E4E4E4"
                            borderRadius={3}
                            enableAnimation
                            duration={1}
                        >
                            <UIContextProvider>{children}</UIContextProvider>
                        </SkeletonTheme>
                    </MarkdownContextProvider>
                </RefetchProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}

export default Providers

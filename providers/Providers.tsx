'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { MarkdownContextProvider } from '../context/MarkdownContext'
import { SessionProvider } from 'next-auth/react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { RefetchProvider } from '../context/RefetchContext'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../redux/store'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <ReduxProvider store={store}>
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
                                {children}
                            </SkeletonTheme>
                        </MarkdownContextProvider>
                    </RefetchProvider>
                </ThemeProvider>
            </ReduxProvider>
        </SessionProvider>
    )
}

export default Providers

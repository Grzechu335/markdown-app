import Header from '@/components/templates/Header'
import type { Metadata } from 'next'
import { Roboto, Roboto_Mono, Roboto_Slab } from 'next/font/google'
import Providers from '../../providers/Providers'
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import SidebarServer from '@/components/templates/SidebarServer'
import DeleteModal from '@/components/modals/DeleteModal'

const robotoRegular = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-robotoRegular',
})

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-robotoSlab',
})

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-robotoMono',
})

export const metadata: Metadata = {
    title: 'Markdown App',
    description: 'Designed by Frontend Mentor, coded by Grzegorz Skrabucha',
    other: {
        viewport:
            'width=device-width, initial-scale-1, maximum-scale=1, user-scalable=0',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${robotoRegular.variable} ${robotoSlab.variable} ${robotoMono.variable}
                `}
            >
                <Providers>
                    <Header />
                    <SidebarServer />
                    <DeleteModal />
                    <div className="mt-[56px] md:mt-[72px]">{children}</div>
                </Providers>
            </body>
        </html>
    )
}

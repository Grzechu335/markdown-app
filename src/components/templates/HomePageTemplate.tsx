'use client'
import { AnimatePresence } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
    BsEyeSlashFill as ClosedEyeIcon,
    BsEyeFill as OpenedEyeIcon,
} from 'react-icons/bs'
import { useUIContext } from '../../../context/UIContext'
import { clsxm } from '../../../utils/clsxm'
import MarkdownCode from '../organisms/MarkdownCode'
import MarkdownPreview from '../organisms/MarkdownPreview'

const HomePageTemplate: React.FC = () => {
    const router = useRouter()
    const { data: session } = useSession({
        required: true,
        onUnauthenticated: () => {
            router.push('/auth/signin')
        },
    })
    const { sidebar } = useUIContext()
    const { preview, togglePreview } = useUIContext()
    return (
        <div
            className={clsxm(
                'transition-transform transform overflow-x-hidden h-[calc(100vh-56px)] md:h-[calc(100vh-72px)] md:max-h-[calc(100vh-72px)] max-h-[calc(100vh-56px)]  relative left-0 duration-200 bg-100 dark:bg-1000',
                {
                    'translate-x-[250px]': sidebar,
                }
            )}
        >
            <div className="relative flex flex-grow h-full lg:grid-cols-2 ">
                {!preview ? (
                    <OpenedEyeIcon
                        className="absolute cursor-pointer right-4 top-[calc(42px/2)] transform translate-y-[-50%] z-50 text-500 dark:text-400 hover:!text-orange"
                        size={20}
                        onClick={togglePreview}
                    />
                ) : (
                    <ClosedEyeIcon
                        className="absolute cursor-pointer right-4 top-[calc(42px/2)] transform translate-y-[-50%] z-50 text-500 dark:text-400 hover:!text-orange"
                        size={20}
                        onClick={togglePreview}
                    />
                )}
                <MarkdownCode />
                <AnimatePresence initial={false}>
                    {preview ? (
                        <MarkdownPreview key="markdown preview" />
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default HomePageTemplate

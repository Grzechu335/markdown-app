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
import useGetAllFiles from '../../../hooks/useGetAllFiles'

const HomePageTemplate: React.FC = () => {
    const router = useRouter()
    const session = useSession({
        required: true,
        onUnauthenticated: () => {
            router.push('/auth/signin')
        },
    })
    const { sidebar, preview, togglePreview } = useUIContext()
    const { files } = useGetAllFiles()
    return (
        <div
            className={clsxm(
                'transition-transform transform overflow-hidden overflow-x-hidden h-[calc(100vh-56px)] md:h-[calc(100vh-72px)] md:max-h-[calc(100vh-72px)] max-h-[calc(100vh-56px)]  relative left-0 duration-200 bg-100 dark:bg-1000',
                {
                    'translate-x-[250px]': sidebar,
                }
            )}
        >
            <div className="relative flex flex-grow h-full lg:grid-cols-2 ">
                {files?.length !== 0 ? (
                    !preview ? (
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
                    )
                ) : null}
                {/* {files?.length !== 0 ? (
                    <React.Fragment>
                        <MarkdownCode />
                        <AnimatePresence initial={false}>
                            {preview ? (
                                <MarkdownPreview key="markdown preview" />
                            ) : null}
                        </AnimatePresence>
                    </React.Fragment>
                ) : (
                    <div className="fixed top-0 bottom-0 left-0 grid w-screen place-content-center">
                        <div className="flex flex-col items- w-[300px] text-center font-mono">
                            <p>There is no markdown files on your account.</p>
                            <br />
                            <p>
                                Create new one by open menu bar and select{' '}
                                <i>new document button.</i>{' '}
                            </p>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default HomePageTemplate

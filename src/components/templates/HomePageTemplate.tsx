'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {
    BsEyeSlashFill as ClosedEyeIcon,
    BsEyeFill as OpenedEyeIcon,
} from 'react-icons/bs'
import { filesSelector } from '../../../redux/slices/markdownSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { clsxm } from '../../../utils/clsxm'
import MarkdownCode from '../organisms/MarkdownCode'
import MarkdownPreview from '../organisms/MarkdownPreview'
import {
    previewSelector,
    sidebarSelector,
    togglePreview,
} from '../../../redux/slices/UISlice'

const HomePageTemplate: React.FC = () => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(filesSelector)
    const sidebar = useAppSelector(sidebarSelector)
    const preview = useAppSelector(previewSelector)

    return (
        <div
            className={clsxm(
                'transition-transform transform  overflow-hidden h-[calc(100vh-56px)] md:h-[calc(100vh-72px)] md:max-h-[calc(100vh-72px)] max-h-[calc(100vh-56px)]  relative left-0 duration-200 bg-100 dark:bg-1000',
                {
                    'translate-x-[250px]': sidebar,
                }
            )}
        >
            <div className="relative flex flex-grow h-full overflow-y-hidden lg:grid-cols-2 ">
                {data?.length !== 0 ? (
                    !preview ? (
                        <OpenedEyeIcon
                            className="absolute cursor-pointer right-4 top-[calc(42px/2)] transform translate-y-[-50%] z-50 text-500 dark:text-400 hover:!text-orange"
                            size={20}
                            onClick={() => dispatch(togglePreview())}
                        />
                    ) : (
                        <ClosedEyeIcon
                            className="absolute cursor-pointer right-4 top-[calc(42px/2)] transform translate-y-[-50%] z-50 text-500 dark:text-400 hover:!text-orange"
                            size={20}
                            onClick={() => dispatch(togglePreview())}
                        />
                    )
                ) : null}

                {data?.length !== 0 ? (
                    <>
                        <MarkdownCode />
                        <AnimatePresence initial={false}>
                            {preview ? (
                                <MarkdownPreview key="markdown preview" />
                            ) : null}
                        </AnimatePresence>
                    </>
                ) : (
                    <div className="fixed top-0 left-0 grid w-screen h-full place-content-center">
                        <div className="flex flex-col items- w-[300px] text-center font-mono">
                            <p>There is no markdown files on your account.</p>
                            <br />
                            <p>
                                Create new one by open menu bar and select{' '}
                                <i>new document button.</i>{' '}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePageTemplate

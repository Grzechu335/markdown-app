'use client'
import React, { useState } from 'react'
import { clsxm } from '../../../utils/clsxm'
import { useSidebarContext } from '../../../context/SidebarContext'
import MarkdownCode from '../organisms/MarkdownCode'
import MarkdownPreview from '../organisms/MarkdownPreview'
import {
    BsEyeFill as OpenedEyeIcon,
    BsEyeSlashFill as ClosedEyeIcon,
} from 'react-icons/bs'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import { AnimatePresence, motion as m } from 'framer-motion'

const HomePageTemplate: React.FC = () => {
    const { open } = useSidebarContext()
    const { previewMode, togglePreviewMode } = useMarkdownContext()
    return (
        <div
            className={clsxm(
                'transition-transform transform overflow-x-hidden h-[calc(100vh-56px)] md:h-[calc(100vh-72px)] md:max-h-[calc(100vh-72px)] max-h-[calc(100vh-56px)]  relative left-0 duration-200 bg-100 dark:bg-1000',
                {
                    'translate-x-[250px]': open,
                }
            )}
        >
            <div className="relative flex flex-grow h-full lg:grid-cols-2 ">
                {!previewMode ? (
                    <OpenedEyeIcon
                        className="absolute cursor-pointer right-4 top-[calc(42px/2)] transform translate-y-[-50%] z-50 text-500 dark:text-400 hover:!text-orange"
                        size={20}
                        onClick={togglePreviewMode}
                    />
                ) : (
                    <ClosedEyeIcon
                        className="absolute cursor-pointer right-4 top-[calc(42px/2)] transform translate-y-[-50%] z-50 text-500 dark:text-400 hover:!text-orange"
                        size={20}
                        onClick={togglePreviewMode}
                    />
                )}
                <MarkdownCode />
                <AnimatePresence initial={false}>
                    {previewMode ? (
                        <MarkdownPreview key="markdown preview" />
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default HomePageTemplate

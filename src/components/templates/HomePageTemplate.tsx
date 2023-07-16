'use client'
import React from 'react'
import { clsxm } from '../../../utils/clsxm'
import { useSidebarContext } from '../../../context/SidebarContext'
import MarkdownCode from '../organisms/MarkdownCode'
import MarkdownPreview from '../organisms/MarkdownPreview'

const HomePageTemplate: React.FC = () => {
    const { open } = useSidebarContext()
    return (
        <div
            className={clsxm(
                'transition-transform transform overflow-x-hidden relative left-0 duration-200 bg-100 dark:bg-1000',
                {
                    'translate-x-[250px]': open,
                }
            )}
        >
            <div className="flex">
                <MarkdownCode />
                <MarkdownPreview />
            </div>
        </div>
    )
}

export default HomePageTemplate

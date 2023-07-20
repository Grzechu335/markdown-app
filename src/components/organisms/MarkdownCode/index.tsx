'use client'
import MarkdownHeading from '@/components/atoms/MarkdownHeading'
import React from 'react'
import { useMarkdownContext } from '../../../../context/MarkdownContext'

const MarkdownCode: React.FC = () => {
    const { input, changeInput } = useMarkdownContext()
    return (
        <div
            className="flex flex-col flex-1 w-full h-full overflow-y-hidden"
            tabIndex={-1}
        >
            <MarkdownHeading>Markdown</MarkdownHeading>
            <textarea
                value={input}
                onChange={changeInput}
                className="w-full h-full p-4 overflow-y-visible outline-none pb-[150px] resize-none md:pb-10 md:static  dark:text-400 text-700 bg-100 dark:bg-1000 markdown-code"
            />
        </div>
    )
}

export default MarkdownCode

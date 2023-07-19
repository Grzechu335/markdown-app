'use client'
import MarkdownHeading from '@/components/atoms/MarkdownHeading'
import React from 'react'
import { useMarkdownContext } from '../../../../context/MarkdownContext'

const MarkdownCode: React.FC = () => {
    const { input, changeInput } = useMarkdownContext()
    return (
        <div className="static flex-col flex-1 w-full h-full overflow-hidden lex">
            <MarkdownHeading>Markdown</MarkdownHeading>
            <textarea
                value={input}
                onChange={changeInput}
                className="w-full h-full max-h-full px-4 pt-2 pb-10 overflow-y-scroll outline-none resize-none md:static scrollbar-none dark:text-400 text-700 bg-100 dark:bg-1000 markdown-code"
            />
        </div>
    )
}

export default MarkdownCode

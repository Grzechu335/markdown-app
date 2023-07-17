'use client'
import MarkdownHeading from '@/components/atoms/MarkdownHeading'
import React from 'react'
import { useMarkdownContext } from '../../../../context/MarkdownContext'
import MarkdownParser from '../MarkdownParser'
import { motion as m } from 'framer-motion'

const MarkdownPreview: React.FC = () => {
    const { input } = useMarkdownContext()
    return (
        <m.div
            initial={{
                opacity: 0,
                x: 400,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            exit={{
                opacity: 0,
                x: 400,
            }}
            transition={{
                duration: 0.1,
            }}
            className="absolute flex-col md:static md:flex flex-1 w-full h-full max-h-full overflow-y-scroll scrollbar-none md:border-l-[1px] md:border-300 md:dark:border-600 z-10"
        >
            <MarkdownHeading>Preview</MarkdownHeading>
            <MarkdownParser>{input}</MarkdownParser>
        </m.div>
    )
}

export default MarkdownPreview

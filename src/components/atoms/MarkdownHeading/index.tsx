import React from 'react'

type MarkdownHeadingProps = {
    children?: string
}

const MarkdownHeading: React.FC<MarkdownHeadingProps> = ({ children }) => {
    return (
        <div className="px-4 sticky top-0 h-[42px] py-3 text-500 bg-200 dark:bg-900 dark:text-400">
            <h3 className="uppercase heading-sm">{children}</h3>
        </div>
    )
}

export default MarkdownHeading

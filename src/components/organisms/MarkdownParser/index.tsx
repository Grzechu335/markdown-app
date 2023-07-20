import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { clsxm } from '../../../../utils/clsxm'

type MarkdownParserProps = {
    children: string
    className?: string
}

const MarkdownParser: React.FC<MarkdownParserProps> = ({
    children,
    className,
}) => {
    return (
        <ReactMarkdown
            className={clsxm(
                'px-4 pt-2 prose h-full min-w-full flex-grow bg-100 dark:bg-1000 pb-[200px] md:pb-10 overflow-y-scroll ',
                `${className ? className : ''}`
            )}
            components={{
                h1: ({ className, ...props }) => {
                    className = 'mt-2 preview-h1'
                    return (
                        <h1
                            className={className}
                            {...props}
                        />
                    )
                },
                h2: ({ className, ...props }) => {
                    className = 'preview-h2'
                    return (
                        <h2
                            className={className}
                            {...props}
                        />
                    )
                },
                h3: ({ className, ...props }) => {
                    className = 'preview-h3'
                    return (
                        <h3
                            className={className}
                            {...props}
                        />
                    )
                },
                h4: ({ className, ...props }) => {
                    className = 'preview-h4'
                    return (
                        <h4
                            className={className}
                            {...props}
                        />
                    )
                },
                h5: ({ className, ...props }) => {
                    className = 'preview-h5'
                    return (
                        <h5
                            className={className}
                            {...props}
                        />
                    )
                },
                h6: ({ className, ...props }) => {
                    className = 'preview-h6'
                    return (
                        <h6
                            className={className}
                            {...props}
                        />
                    )
                },
                p: ({ className, ...props }) => {
                    className = 'preview-p'
                    return (
                        <p
                            className={className}
                            {...props}
                        />
                    )
                },
                strong: ({ className, ...props }) => {
                    className = 'preview-p-bold'
                    return (
                        <strong
                            className={className}
                            {...props}
                        />
                    )
                },
                ul: ({ className, ...props }) => {
                    className = 'preview-ul'
                    return (
                        <ul
                            className={className}
                            {...props}
                        />
                    )
                },
                ol: ({ className, ...props }) => {
                    className = 'preview-ol'
                    return (
                        <ol
                            className={className}
                            {...props}
                        />
                    )
                },
                a: ({ className, ...props }) => {
                    className = 'preview-a'
                    return (
                        <a
                            className={className}
                            {...props}
                        />
                    )
                },
                blockquote: ({ className, ...props }) => {
                    className = 'preview-blockquote'
                    return (
                        <blockquote
                            className={className}
                            {...props}
                        />
                    )
                },
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className ?? '')
                    className = 'markdown-code'
                    return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
                            // eslint-disable-next-line react/no-children-prop
                            children={String(children).replace(/\n$/, '')}
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                        />
                    ) : (
                        <code
                            {...props}
                            className={className}
                        >
                            {children}
                        </code>
                    )
                },
            }}
            remarkPlugins={[remarkGfm]}
        >
            {children}
        </ReactMarkdown>
    )
}

export default MarkdownParser

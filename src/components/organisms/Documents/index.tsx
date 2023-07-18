'use client'
import React from 'react'
import { GoFile as FileIcon } from 'react-icons/go'
import { useMarkdownContext } from '../../../../context/MarkdownContext'
import useGetAllFiles from '../../../../hooks/useGetAllFiles'
import { clsxm } from '../../../../utils/clsxm'
import dateFormatter from '../../../../utils/dateFormatter'
import Skeleton from 'react-loading-skeleton'

const Documents: React.FC = () => {
    const { changeSelectedFileId, selectedFileId } = useMarkdownContext()
    const { files: markdowns, loading } = useGetAllFiles()
    return (
        <>
            {!loading ? (
                <div className="space-y-[26px] h-full flex flex-col flex-grow overflow-y-scroll scrollbar-none overflow-x-hidden">
                    {markdowns &&
                        markdowns.length > 0 &&
                        markdowns?.map((file) => (
                            <div
                                key={file.id}
                                className={clsxm(
                                    'flex items-center px-3 py-1 space-x-4 rounded-md cursor-pointer group',
                                    {
                                        'dark:bg-300/20':
                                            file.id === selectedFileId,
                                    }
                                )}
                                onClick={() => changeSelectedFileId(file.id)}
                            >
                                <FileIcon
                                    size={18}
                                    color="#fff"
                                    className="flex-shrink-0"
                                />

                                <div className="w-full truncate">
                                    <span className="body-md text-500">
                                        {dateFormatter(
                                            new Date(file.updatedAt)
                                        )}
                                    </span>
                                    <p className="flex-grow-0 block truncate heading-md text-100 group-hover:text-orange">
                                        {file.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <div className="space-y-[26px] flex flex-col h-full flex-grow overflow-y-scroll scrollbar-none overflow-x-hidden">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Skeleton
                            key={idx}
                            className="w-full h-8"
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Documents

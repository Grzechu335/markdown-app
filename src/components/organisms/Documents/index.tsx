'use client'
import React from 'react'
import { GoFile as FileIcon } from 'react-icons/go'
import { useMarkdownContext } from '../../../../context/MarkdownContext'
import useGetAllFiles from '../../../../hooks/useGetAllFiles'
import { clsxm } from '../../../../utils/clsxm'
import dateFormatter from '../../../../utils/dateFormatter'

const Documents: React.FC = () => {
    const { changeSelectedFileId, selectedFileId } = useMarkdownContext()
    const { files: markdowns } = useGetAllFiles()
    return (
        <div className="space-y-[26px] h-full flex-grow overflow-y-scroll scrollbar-none">
            {markdowns?.map((file) => (
                <div
                    key={file.id}
                    className={clsxm(
                        'flex items-center px-3 py-1 space-x-4 rounded-md cursor-pointer',
                        {
                            'dark:bg-300/20': file.id === selectedFileId,
                        }
                    )}
                    onClick={() => changeSelectedFileId(file.id)}
                >
                    <FileIcon
                        size={18}
                        color="#fff"
                    />

                    <div>
                        <span className="body-md text-500">
                            {dateFormatter(new Date(file.lastUpdate))}
                        </span>
                        <p className="heading-md text-100">{file.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Documents

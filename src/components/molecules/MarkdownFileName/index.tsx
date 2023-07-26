'use client'
import React from 'react'
import { GoFile as FileIcon } from 'react-icons/go'
import Skeleton from 'react-loading-skeleton'
import { useAppSelector } from '../../../../redux/store'
import { filesSelector } from '../../../../redux/slices/markdownSlice'
import useGetFileById from '../../../../hooks/useGetFileById'
import { useMarkdownContext } from '../../../../context/MarkdownContext'
import { useSession } from 'next-auth/react'

const MarkdownFileName: React.FC = () => {
    const { status } = useSession()
    const { data: files } = useAppSelector(filesSelector)
    const { file, loading } = useGetFileById()
    const { input, fileName, changeFileName } = useMarkdownContext()
    return (
        <div className="space-x-[16px] flex items-center">
            <FileIcon
                size={18}
                fill="#fff"
            />
            <div>
                <p className="hidden text-500 body-md md:inline">
                    Document name
                </p>
                {loading || status === 'loading' ? (
                    <Skeleton className="inline-block" />
                ) : files?.length !== 0 ? (
                    <input
                        disabled={files?.length === 0}
                        value={fileName}
                        onChange={(e) => changeFileName(e)}
                        className="block outline-none  text-100 disabled:cursor-not-allowed rounded-none bg-800 heading-md focus:text-orange focus:border-b-[1px] focus:border-b-100 cursor-pointer hover:text-orangeHover"
                        type="text"
                    />
                ) : (
                    <p className="text-red-500 heading-md whitespace-nowrap">
                        No files found
                    </p>
                )}
            </div>
        </div>
    )
}

export default MarkdownFileName

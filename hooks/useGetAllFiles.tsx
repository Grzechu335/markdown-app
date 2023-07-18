'use client'
import { MarkdownFile } from '@prisma/client'
import { useCallback, useEffect, useState } from 'react'
import { useMarkdownContext } from '../context/MarkdownContext'

const useGetAllFiles = () => {
    const [files, setFiles] = useState<MarkdownFile[] | null>(null)
    const [loading, setLoading] = useState(false)
    const { selectedFileId } = useMarkdownContext()
    const getFiles = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/markdown/getAllFiles', {
                method: 'GET',
            }).then((res) => res.json())
            setLoading(false)
            setFiles(res)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }, [])
    const refetch = () => {
        getFiles()
    }
    useEffect(() => {
        getFiles()
    }, [getFiles, selectedFileId])
    return { files, loading, refetch }
}

export default useGetAllFiles

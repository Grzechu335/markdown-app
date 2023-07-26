'use client'

export const revalidate = 0

import { MarkdownFile } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { useRefetch } from '../context/RefetchContext'

const useGetAllFiles = () => {
    const { refetchFlag } = useRefetch()
    const [files, setFiles] = useState<MarkdownFile[] | null>(null)
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()
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

    useEffect(() => {
        if (session) {
            getFiles()
        }
    }, [session, getFiles, refetchFlag])
    return { files, loading }
}

export default useGetAllFiles

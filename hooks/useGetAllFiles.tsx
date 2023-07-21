'use client'

export const revalidate = 0

import { MarkdownFile } from '@prisma/client'
import { useCallback, useEffect, useState } from 'react'
import { useMarkdownContext } from '../context/MarkdownContext'
import { useSession } from 'next-auth/react'
import { useRefetch } from '../context/RefetchContext'

const useGetAllFiles = () => {
    const { refetchFlag } = useRefetch()
    const [files, setFiles] = useState<MarkdownFile[] | null>(null)
    const [loading, setLoading] = useState(false)
    const { selectedFileId } = useMarkdownContext()
    const { data: session } = useSession()
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
    }, [session, refetchFlag])
    return { files, loading }
}

export default useGetAllFiles

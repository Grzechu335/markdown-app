'use client'
import { MarkdownFile } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { useMarkdownContext } from '../context/MarkdownContext'

const useGetFileById = () => {
    const [file, setFile] = useState<MarkdownFile | null>(null)
    const [loading, setLoading] = useState(false)
    const { selectedFileId, setInputToValue, setFileNameToValue } =
        useMarkdownContext()
    const { data: session } = useSession()

    const refreshFile = useCallback(async () => {
        setLoading(true)
        try {
            const res: MarkdownFile = await fetch('/api/markdown/getFile', {
                body: JSON.stringify({ id: selectedFileId }),
                method: 'POST',
            }).then((res) => res.json())
            setLoading(false)
            setFile(res)
            setInputToValue(res?.text)
            setFileNameToValue(res?.name)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }, [selectedFileId])
    useEffect(() => {
        if (session) {
            refreshFile()
        }
    }, [selectedFileId, refreshFile, session])
    return { file, loading }
}

export default useGetFileById

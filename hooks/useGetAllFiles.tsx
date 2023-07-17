'use client'
import { MarkDownFile } from '@prisma/client'
import { useCallback, useEffect, useState } from 'react'

const useGetAllFiles = () => {
    const [files, setFiles] = useState<MarkDownFile[] | null>(null)
    const [loading, setLoading] = useState(false)

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
        getFiles()
    }, [getFiles])
    return { files, loading }
}

export default useGetAllFiles

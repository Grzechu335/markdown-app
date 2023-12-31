import { MarkdownFile } from '@prisma/client'

export const updateMarkdownFile = async ({
    id,
    name,
    text,
}: {
    id?: string
    name: string
    text: string
}) => {
    const updatedFile = {
        id,
        name,
        text,
    }
    try {
        const res = await fetch('/api/markdown/updateFile', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFile),
            method: 'POST',
        })
        return res
    } catch (err) {
        console.error(err)
    }
}

export const deleteMarkdownFile = async ({
    selectedFileId,
}: {
    selectedFileId: string | undefined
}) => {
    try {
        // delete file
        await fetch('/api/markdown/deleteFile', {
            method: 'POST',
            body: JSON.stringify({ selectedFileId }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        // fetch latest file
        const latestFile: MarkdownFile = await fetch(
            'api/markdown/latestFile',
            {
                method: 'GET',
            }
        ).then((res) => res.json())
        return {
            ...latestFile,
            ok: true,
        }
    } catch (err) {
        console.error(err)
        return { ok: false }
    }
}

export const createNewMarkdownFile = async () => {
    try {
        const newMarkdown: MarkdownFile = await fetch(
            '/api/markdown/createNewFile',
            {
                method: 'POST',
            }
        ).then((res) => res.json())
        return {
            ...newMarkdown,
            ok: true,
        }
    } catch (err) {
        console.error(err)
        return { ok: false }
    }
}

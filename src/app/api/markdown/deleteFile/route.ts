import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function DELETE(req: Request) {
    const { selectedFileId } = (await req.json()) as { selectedFileId: string }
    if (selectedFileId === null) console.log('no file to delete')
    try {
        const res = await prisma.markdownFile.delete({
            where: {
                id: selectedFileId,
            },
        })
        console.log(res)
    } catch (err) {
        return NextResponse.json({
            error: 'Failed delete markdown file',
            status: 400,
        })
    }
}

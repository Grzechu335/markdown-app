import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function DELETE(req: Request) {
    const { selectedFileId } = (await req.json()) as { selectedFileId: string }
    try {
        console.log(selectedFileId)
        await prisma.markdownFile.delete({
            where: {
                id: selectedFileId,
            },
        })
    } catch (err) {
        return NextResponse.json({
            error: 'Failed delete markdown file',
            status: 400,
        })
    }
}

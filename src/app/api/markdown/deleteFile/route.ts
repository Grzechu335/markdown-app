import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

export async function POST(req: Request) {
    const session = await getServerSession(authOptions)

    if (!session)
        return NextResponse.json(
            { message: 'User not authenticated' },
            { status: 400 }
        )

    let selectedFileId
    try {
        const body: {
            selectedFileId: string
        } = await req.json()
        selectedFileId = body.selectedFileId
    } catch (err) {
        return NextResponse.json({
            error: 'Markdown file ID required',
            status: 400,
        })
    }

    try {
        await prisma.markdownFile.delete({
            where: {
                id: selectedFileId,
            },
        })
        return NextResponse.json({ ok: true })
    } catch (err) {
        return NextResponse.json({
            error: 'Failed delete markdown file',
            status: 400,
        })
    }
}

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

    let fileId

    try {
        const { id } = (await req.json()) as { id: string | undefined }
        fileId = id
    } catch {
        return NextResponse.json({
            error: 'Markdown file ID required',
            status: 400,
        })
    }

    try {
        if (fileId !== undefined) {
            const file = await prisma.markdownFile.findUnique({
                where: {
                    id: fileId,
                    authorId: session?.user.id,
                },
            })
            return NextResponse.json(file)
        } else {
            const file = await prisma.markdownFile.findFirst({
                where: {
                    authorId: session?.user.id,
                },

                orderBy: {
                    updatedAt: 'desc',
                },
            })
            return NextResponse.json(file)
        }
    } catch (err) {
        return NextResponse.json({
            error: 'Failed fetch markdown file',
            status: 400,
        })
    }
}

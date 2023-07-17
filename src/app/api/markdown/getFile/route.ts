import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

export async function POST(req: Request) {
    const { fileId } = (await req.json()) as { fileId: string | null }
    const session = await getServerSession(authOptions)
    try {
        if (fileId !== null) {
            const file = await prisma.markDownFile.findUnique({
                where: {
                    id: fileId,
                    authorId: session?.user.id,
                },
            })
            return NextResponse.json(file)
        } else {
            const file = await prisma.markDownFile.findFirst({
                where: {
                    authorId: session?.user.id,
                },
                orderBy: {
                    lastUpdate: 'desc',
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

import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

export async function GET() {
    const session = await getServerSession(authOptions)
    if (session) {
        try {
            const latestFile = await prisma.markdownFile.findFirst({
                where: {
                    authorId: session.user.id,
                },
                orderBy: {
                    lastUpdate: 'desc',
                },
            })
            return NextResponse.json(latestFile)
        } catch (err) {
            return NextResponse.json({
                error: 'Failed fetch markdown file',
                status: 400,
            })
        }
    }
}

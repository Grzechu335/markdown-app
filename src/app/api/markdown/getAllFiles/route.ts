import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

export async function GET() {
    const session = await getServerSession(authOptions)

    if (!session)
        return NextResponse.json(
            { message: 'User not authenticated' },
            { status: 400 }
        )
    try {
        const file = await prisma.markdownFile.findMany({
            where: {
                authorId: session?.user.id,
            },
            orderBy: {
                updatedAt: 'desc',
            },
        })
        return NextResponse.json(file)
    } catch (err) {
        return NextResponse.json({
            error: "Failed fetch user's markdown files",
            status: 400,
        })
    }
}

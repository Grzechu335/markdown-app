import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

export async function GET() {
    const session = await getServerSession(authOptions)
    try {
        const file = await prisma.markdownFile.findMany({
            // where: {
            //     authorId: session?.user.id,
            // },
            where: {
                authorId: 'clk70z64v0000yb7dpdju5ioa',
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

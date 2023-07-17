import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)
    if (session) {
        try {
            const res = await prisma.markDownFile.create({
                data: {
                    name: 'newDocument',
                    text: '# Start typing to magic happen!',
                    authorId: session?.user.id,
                },
            })
            return NextResponse.json(res)
        } catch (err) {
            return NextResponse.json({
                error: 'Failed create new markdown file',
                status: 400,
            })
        }
    }
}

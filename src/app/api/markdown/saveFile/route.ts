import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const updatedFile = (await req.json()) as {
        id?: string
        name: string
        text: string
    }

    const session = await getServerSession(authOptions)
    if (session) {
        try {
            const res = await prisma.markDownFile.update({
                where: {
                    id: updatedFile.id,
                },
                data: {
                    ...updatedFile,
                },
            })
            return NextResponse.json(res)
        } catch (err) {
            console.error(err)
        }
    }
}

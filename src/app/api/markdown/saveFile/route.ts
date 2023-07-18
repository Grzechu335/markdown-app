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
            await prisma.markDownFile.update({
                where: {
                    id: updatedFile.id,
                },
                data: {
                    ...updatedFile,
                },
            })
            return NextResponse.json('', {
                status: 200,
            })
        } catch (err) {
            console.error(err)
        }
    }
}

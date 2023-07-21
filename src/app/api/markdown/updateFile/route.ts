import { updateMarkdownFile } from './../../../../../utils/markdownCRUDFunctions'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
    // if (!session)
    //     return NextResponse.json(
    //         { message: 'User not authenticated' },
    //         { status: 400 }
    //     )

    let updatedFile

    try {
        const file = (await req.json()) as {
            id?: string
            name: string
            text: string
        }
        updatedFile = file
    } catch {
        return NextResponse.json({
            error: 'Updated file required',
            status: 400,
        })
    }

    try {
        await prisma.markdownFile.update({
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
        return NextResponse.json({
            error: 'Failed trying update markdown file',
            status: 400,
        })
    }
}

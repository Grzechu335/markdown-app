'use client'
import HomePageTemplate from '@/components/templates/HomePageTemplate'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Oval } from 'react-loader-spinner'

export default function Home() {
    const { data: session, status } = useSession()
    if (status === 'loading')
        return (
            <div className="fixed inset-0 grid place-content-center">
                <Oval
                    height={80}
                    width={80}
                    color="#F39765"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#E46643"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        )
    if (!session) redirect('/auth/signin')
    return <HomePageTemplate />
}

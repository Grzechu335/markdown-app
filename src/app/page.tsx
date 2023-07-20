import HomePageTemplate from '@/components/templates/HomePageTemplate'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
    const session = await getServerSession(authOptions)
    if (!session) redirect('/auth/signin')
    return <HomePageTemplate />
}

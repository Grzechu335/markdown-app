'use client'
import CustomButton from '@/components/atoms/CustomButton'
import ThemeSwitch from '@/components/atoms/ThemeSwitch'
import { motion as m } from 'framer-motion'
import Documents from '../Documents'
import { useSession } from 'next-auth/react'
import { GoSignOut as SignOutIcon } from 'react-icons/go'
import { signOut } from 'next-auth/react'

const Sidebar: React.FC = () => {
    const { data: session } = useSession()
    return (
        <m.aside
            initial={{
                x: -300,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            exit={{ x: -300, opacity: 0 }}
            transition={{
                duration: 0.2,
            }}
            className="fixed left-0 top-0 h-screen bg-900 p-6 w-[250px] z-[999]"
        >
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col h-full space-y-6">
                    <h2 className="uppercase heading-sm text-500">
                        <span className="text-100">{session?.user?.name}</span>{' '}
                        <br /> documents
                    </h2>
                    <CustomButton>
                        <span>+ New Document</span>
                    </CustomButton>
                    <Documents />
                </div>
                <div className="flex items-center justify-between mb-28 md:mb-0">
                    <ThemeSwitch className="flex items-center space-x-[12px] " />
                    <SignOutIcon
                        size={20}
                        className="cursor-pointer"
                        color="#fff"
                        onClick={() => signOut()}
                    />
                </div>
            </div>
        </m.aside>
    )
}

export default Sidebar

'use client'
import CustomButton from '@/components/atoms/CustomButton'
import ThemeSwitch from '@/components/atoms/ThemeSwitch'
import { motion as m } from 'framer-motion'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { GoSignOut as SignOutIcon } from 'react-icons/go'
import { useMarkdownContext } from '../../../../context/MarkdownContext'
import { useUIContext } from '../../../../context/UIContext'
import { createNewMarkdownFile } from '../../../../utils/markdownCRUDFunctions'
import Documents from '../Documents'

const Sidebar: React.FC = () => {
    const { data: session } = useSession()

    const { setInputToValue, setFileNameToValue, changeSelectedFileId } =
        useMarkdownContext()

    const { toggleSidebar } = useUIContext()
    const createNewFile = async () => {
        toast.promise(createNewMarkdownFile(), {
            success: (res) => {
                if (!res.ok) throw new Error()
                // @ts-ignore
                setInputToValue(res.text)
                // @ts-ignore
                setFileNameToValue(res?.name!)
                // @ts-ignore
                changeSelectedFileId(res?.id!)
                toggleSidebar()
                return 'File was created'
            },
            loading: 'Creating file...',
            error: 'Something went wrong while creating file',
        })
    }
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
            className="fixed left-0 top-0 h-[100%] bg-900 p-6 w-[250px] z-[999]"
        >
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col h-full space-y-6">
                    <h2 className="uppercase heading-sm text-500">
                        <span className="text-100">{session?.user?.name}</span>{' '}
                        <br /> documents
                    </h2>
                    <CustomButton onClick={createNewFile}>
                        <span>+ New Document</span>
                    </CustomButton>
                    {/* <Documents /> */}
                </div>
                <div className="flex items-center justify-between">
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

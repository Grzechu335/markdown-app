'use client'
import { AnimatePresence, motion as m } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logoImage from 'public/assets/logo.svg'
import React from 'react'
import { BiTrash as TrashIcon } from 'react-icons/bi'
import { GoFile as FileIcon } from 'react-icons/go'
import { RxHamburgerMenu as HamburgerMenuIcon } from 'react-icons/rx'
import { TfiSave as SaveIcon } from 'react-icons/tfi'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'
import Skeleton from 'react-loading-skeleton'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import { useUIContext } from '../../../context/UIContext'
import useGetFileById from '../../../hooks/useGetFileById'
import { clsxm } from '../../../utils/clsxm'
import { updateMarkdownFile } from '../../../utils/markdownCRUDFunctions'
import CustomButton from '../atoms/CustomButton'
import { toast } from 'react-hot-toast'
import useGetAllFiles from '../../../hooks/useGetAllFiles'
import { useRefetch } from '../../../context/RefetchContext'

const Header: React.FC = () => {
    const path = usePathname()
    const { file, loading } = useGetFileById()
    const { input, fileName, changeFileName } = useMarkdownContext()
    const { toggleDeleteModal, sidebar, toggleSidebar } = useUIContext()
    const { files } = useGetAllFiles()
    const { triggerRefetch } = useRefetch()
    const updateFile = () => {
        toast.promise(
            updateMarkdownFile({
                id: file?.id,
                name: fileName,
                text: input,
            }),
            {
                success: (res) => {
                    if (!res?.ok) throw new Error()
                    triggerRefetch()
                    return 'File was updated'
                },
                loading: 'Updating file...',
                error: 'Something went wrong while updating file',
            }
        )
    }

    if (path === '/auth/signin') return null
    return (
        <header className="fixed left-0 top-0 right-0 h-[56px] md:h-[72px] bg-800 flex justify-between z-[998]">
            <div
                className={clsxm(
                    'flex space-x-3 md:space-x-6 transition-all duration-200',
                    {
                        'ml-[250px]': sidebar,
                    }
                )}
            >
                <div
                    onClick={toggleSidebar}
                    className="grid place-content-center flex-shrink-0 w-[56px] h-[56px] md:w-[72px] md:h-[72px] bg-700 cursor-pointer hover:bg-orange transition-colors duration-200"
                >
                    {!sidebar ? (
                        <HamburgerMenuIcon
                            size={30}
                            color="#fff"
                        />
                    ) : (
                        <CloseIcon
                            size={30}
                            color="#fff"
                        />
                    )}
                </div>
                <div className="hidden place-content-center lg:grid">
                    <Image
                        src={logoImage}
                        alt="logo image"
                    />
                </div>
                <span className="w-[1px] h-[40px] bg-600 my-auto hidden lg:block" />
                <div className="space-x-[16px] flex items-center">
                    <FileIcon
                        size={18}
                        fill="#fff"
                    />
                    <div>
                        <p className="hidden text-500 body-md md:inline">
                            Document name
                        </p>
                        {loading ? (
                            <Skeleton className="inline-block" />
                        ) : files?.length !== 0 ? (
                            <input
                                disabled={files?.length === 0}
                                value={fileName}
                                onChange={(e) => changeFileName(e)}
                                className="block outline-none text-100 disabled:cursor-not-allowed bg-800 heading-md focus:text-orange focus:border-b-[1px] focus:border-100 cursor-pointer hover:text-orangeHover"
                                type="text"
                            />
                        ) : (
                            <p className="text-red-500 heading-md whitespace-nowrap">
                                No files found
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {!sidebar && (
                    <m.div
                        initial={{
                            x: 300,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        exit={{
                            x: 300,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="flex items-center mr-2 space-x-4 md:space-x-6 md:mr-4"
                    >
                        <button
                            disabled={files?.length === 0}
                            onClick={toggleDeleteModal}
                            className="group disabled:cursor-not-allowed"
                        >
                            <TrashIcon
                                size={20}
                                className="fill-500 group-hover:fill-orange group-disabled:fill-red-500"
                            />
                        </button>
                        <CustomButton
                            onClick={updateFile}
                            className="p-3 disabled:cursor-not-allowed"
                            disabled={files?.length === 0}
                        >
                            <SaveIcon
                                color="#fff"
                                size={16}
                            />
                            <span className="hidden md:inline-block">
                                Save Changes
                            </span>
                        </CustomButton>
                    </m.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header

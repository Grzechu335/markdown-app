'use client'
import React from 'react'
import CustomButton from '../CustomButton'
import { AnimatePresence, motion as m } from 'framer-motion'
import { TfiSave as SaveIcon } from 'react-icons/tfi'
import { BiTrash as TrashIcon } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import {
    sidebarSelector,
    toggleDeleteModal,
} from '../../../../redux/slices/UISlice'
import { toast } from 'react-hot-toast'
import { updateMarkdownFile } from '../../../../utils/markdownCRUDFunctions'
import { useRefetch } from '../../../../context/RefetchContext'
import { useMarkdownContext } from '../../../../context/MarkdownContext'
import useGetFileById from '../../../../hooks/useGetFileById'
import { filesSelector } from '../../../../redux/slices/markdownSlice'

const DeleteAndSaveButtons: React.FC = () => {
    const dispatch = useAppDispatch()
    const { triggerRefetch } = useRefetch()
    const sidebar = useAppSelector(sidebarSelector)
    const { input, fileName, changeFileName } = useMarkdownContext()
    const { file, loading } = useGetFileById()
    const { data: files } = useAppSelector(filesSelector)

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
    return (
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
                        onClick={() => dispatch(toggleDeleteModal())}
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
    )
}

export default DeleteAndSaveButtons

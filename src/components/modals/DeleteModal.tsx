'use client'
import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import CustomButton from '../atoms/CustomButton'
import { useUIContext } from '../../../context/UIContext'
import { toast } from 'react-hot-toast'
import { deleteMarkdownFile } from '../../../utils/markdownCRUDFunctions'

const DeleteModal: React.FC = () => {
    const { fileName, selectedFileId, changeSelectedFileId } =
        useMarkdownContext()
    const { deleteModal, toggleDeleteModal } = useUIContext()
    const deleteFile = async () => {
        toast.promise(deleteMarkdownFile({ selectedFileId }), {
            success: (res) => {
                if (!res.ok) throw new Error()
                toggleDeleteModal()
                // @ts-ignore
                changeSelectedFileId(res.id)
                return 'File was deleted'
            },
            loading: 'Deleting file...',
            error: 'Something went wrong while deleting file',
        })
    }
    return (
        <AnimatePresence>
            {deleteModal && (
                <m.div className="fixed left-0 top-0 w-screen h-screen z-[100000] bg-1000/50 flex justify-center items-center">
                    <div className="flex flex-col p-6 space-y-4 bg-100 dark:bg-900 max-w-[343px] text-center">
                        <h4 className="font-slab text-[20px] font-bold dark:text-100 text-700">
                            Delete this document?
                        </h4>
                        <p className="preview-p dark:text-400 text-500">
                            Are you sure you want to delete the{' '}
                            <span className="italic font-bold">
                                ‘{fileName}’
                            </span>{' '}
                            document and its contents? This action cannot be
                            reversed.
                        </p>
                        <CustomButton onClick={deleteFile}>
                            Confirm & Delete
                        </CustomButton>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    )
}

export default DeleteModal

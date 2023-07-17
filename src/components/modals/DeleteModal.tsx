'use client'
import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import CustomButton from '../atoms/CustomButton'
import { useUIContext } from '../../../context/UIContext'

const DeleteModal: React.FC = () => {
    const { fileName, selectedFileId } = useMarkdownContext()
    const { deleteModal, toggleDeleteModal } = useUIContext()
    const deleteMarkdown = async () => {
        try {
            await fetch('/api/markdown/deleteFile', {
                method: 'DELETE',
                body: JSON.stringify({ selectedFileId }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            toggleDeleteModal()
        } catch (err) {
            console.error(err)
        }
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
                        <CustomButton onClick={deleteMarkdown}>
                            Confirm & Delete
                        </CustomButton>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    )
}

export default DeleteModal

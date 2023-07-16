import React from 'react'
import { GoFile as FileIcon } from 'react-icons/go'

type DocumentsProps = {}

const Documents: React.FC<DocumentsProps> = () => {
    const testDocumentsArray = [0, 1]
    return (
        <div className="space-y-[26px] h-full flex-grow overflow-y-scroll scrollbar-none">
            {testDocumentsArray.map((document, idx) => (
                <div
                    key={idx}
                    className="flex items-center space-x-4"
                >
                    <FileIcon
                        size={18}
                        color="#fff"
                    />
                    <div>
                        <span className="body-md text-500">01 April 2022</span>
                        <p className="heading-md text-100">welcome.md</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Documents

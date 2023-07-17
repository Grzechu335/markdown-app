'use client'
import React, {
    ChangeEvent,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react'
import useGetFileById from '../hooks/useGetFileById'

type MarkdownContextType = {
    input: string
    selectedFileId: string | null
    fileName: string
    changeInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
    changeSelectedFileId: (id: string) => void
    changeFileName: (e: ChangeEvent<HTMLInputElement>) => void
    setInputToValue: (text: string) => void
    setFileNameToValue: (value: string) => void
}

const MarkdownContext = createContext<MarkdownContextType>({
    input: '',
    selectedFileId: null,
    fileName: '',
    changeInput: () => {},
    changeSelectedFileId: () => {},
    changeFileName: () => {},
    setInputToValue: () => {},
    setFileNameToValue: () => {},
})

export const MarkdownContextProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const { file } = useGetFileById()
    const [input, setInput] = useState<string>(file?.text!)
    const [selectedFileId, setSelectedFileId] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string>(file?.name!)

    const changeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
    }

    const changeFileName = (e: ChangeEvent<HTMLInputElement>) => {
        setFileName(e.target.value)
    }

    const setFileNameToValue = (value: string) => {
        setFileName(value)
    }

    const setInputToValue = (text: string) => {
        setInput(text)
    }

    const changeSelectedFileId = (id: string) => {
        setSelectedFileId(id)
    }
    const contextValue = useMemo(
        (): MarkdownContextType => ({
            input,
            changeInput,
            selectedFileId,
            changeSelectedFileId,
            setInputToValue,
            fileName,
            changeFileName,
            setFileNameToValue,
        }),
        [input, selectedFileId, fileName]
    )

    return (
        <MarkdownContext.Provider value={contextValue}>
            {children}
        </MarkdownContext.Provider>
    )
}

export default MarkdownContext

export const useMarkdownContext = () =>
    useContext<MarkdownContextType>(MarkdownContext)

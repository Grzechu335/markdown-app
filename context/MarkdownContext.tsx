'use client'
import React, {
    ChangeEvent,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react'

type MarkdownContextType = {
    input: string
    changeInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
    previewMode: boolean
    togglePreviewMode: () => void
}

const MarkdownContext = createContext<MarkdownContextType>({
    input: '',
    changeInput: () => {},
    previewMode: true,
    togglePreviewMode: () => {},
})

export const MarkdownContextProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [input, setInput] = useState<string>('')
    const [previewMode, setPreviewMode] = useState<boolean>(true)

    const changeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
    }

    const togglePreviewMode = () => {
        setPreviewMode((prev) => !prev)
    }
    const contextValue = useMemo(
        (): MarkdownContextType => ({
            input,
            changeInput,
            previewMode,
            togglePreviewMode,
        }),
        [input, previewMode]
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

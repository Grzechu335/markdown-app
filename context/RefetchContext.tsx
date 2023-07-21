import React, { createContext, useContext, useState } from 'react'

interface RefetchContextType {
    refetchFlag: boolean
    triggerRefetch: () => void
}

const RefetchContext = createContext<RefetchContextType | null>(null)

export const RefetchProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [refetchFlag, setRefetchFlag] = useState(false)

    const triggerRefetch = () => {
        setRefetchFlag((prevFlag) => !prevFlag)
    }

    return (
        <RefetchContext.Provider value={{ refetchFlag, triggerRefetch }}>
            {children}
        </RefetchContext.Provider>
    )
}

export const useRefetch = (): RefetchContextType => {
    const context = useContext(RefetchContext)
    if (!context) {
        throw new Error('useRefetch must be used within a RefetchProvider')
    }
    return context
}

'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { clsxm } from '../../../../utils/clsxm'
import { getProviders, signIn } from 'next-auth/react'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    providerId?: string
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const { className, children, providerId, ...rest } = props
    return (
        <button
            onClick={
                providerId
                    ? () => signIn(providerId, { callbackUrl: '/' })
                    : undefined
            }
            className={clsxm(
                'heading-md text-100 rounded-[4px] bg-orange hover:bg-orangeHover cursor-pointer py-[10px] px-4 flex items-center justify-center space-x-[8px]',
                `${className}`
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default CustomButton

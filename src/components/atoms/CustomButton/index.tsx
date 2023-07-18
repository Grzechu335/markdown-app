'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { clsxm } from '../../../../utils/clsxm'
import { getProviders, signIn } from 'next-auth/react'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    providerId?: string
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const { className, children, providerId, onClick, ...rest } = props
    return (
        <button
            onClick={
                providerId
                    ? () => signIn(providerId, { callbackUrl: '/' })
                    : onClick
            }
            className={clsxm(
                'heading-md text-100 rounded-[4px] bg-orange disabled:bg-red-500 hover:bg-orangeHover cursor-pointer py-[10px] px-4 flex items-center justify-center space-x-[8px]',
                `${className}`
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default CustomButton

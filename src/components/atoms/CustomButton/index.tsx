import React, { ButtonHTMLAttributes } from 'react'
import { clsxm } from '../../../../utils/clsxm'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const { className, children, ...rest } = props
    return (
        <button
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

'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoon as MoonIcon, BsSun as SunIcon } from 'react-icons/bs'
import { clsxm } from '../../../../utils/clsxm'
import Switch from 'react-switch'

type ThemeSwitchProps = {
    className?: string
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        if (theme === 'light') setTheme('dark')
        else setTheme('light')
    }
    return (
        <div
            className={clsxm(
                'flex items-center space-x-[12px]',
                `${className}`
            )}
        >
            <MoonIcon
                size={16}
                className={clsxm('transition-colors duration-100', {
                    'text-100': theme === 'dark',
                    'text-600': theme === 'light',
                })}
            />
            <Switch
                borderRadius={14}
                width={48}
                height={24}
                handleDiameter={12}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor="#5A6069"
                offColor="#5A6069"
                checked={theme === 'light'}
                onChange={toggleTheme}
            />
            <SunIcon
                className={clsxm('transition-colors duration-100', {
                    'text-100': theme === 'light',
                    'text-600': theme === 'dark',
                })}
                size={16}
            />
        </div>
    )
}

export default ThemeSwitch

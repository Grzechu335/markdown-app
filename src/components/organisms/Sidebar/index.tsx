'use client'
import CustomButton from '@/components/atoms/CustomButton'
import ThemeSwitch from '@/components/atoms/ThemeSwitch'
import { motion as m } from 'framer-motion'
import Documents from '../Documents'

const Sidebar: React.FC = () => {
    return (
        <m.aside
            initial={{
                x: -300,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            exit={{ x: -300, opacity: 0 }}
            transition={{
                duration: 0.2,
            }}
            className="fixed left-0 top-0 h-screen bg-900 p-6 w-[250px] z-[999]"
        >
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col h-full space-y-6">
                    <h2 className="uppercase heading-sm text-500">
                        My documents
                    </h2>
                    <CustomButton>
                        <span>+ New Document</span>
                    </CustomButton>
                    <Documents />
                </div>
                <ThemeSwitch className="flex items-center space-x-[12px] mb-28 md:mb-0" />
            </div>
        </m.aside>
    )
}

export default Sidebar

'use client'
import { motion as m } from 'framer-motion'
import { useSidebarContext } from '../../../context/SidebarContext'
import { clsxm } from '../../../utils/clsxm'

type Props = {}

const HomePageWrapper = (props: Props) => {
    const { open } = useSidebarContext()
    return (
        <m.div
            className={clsxm('transition-all duration-200', {
                'ml-[250px]': open,
            })}
        >
            <h1>Heelo</h1>
        </m.div>
    )
}

export default HomePageWrapper

import Image from 'next/image'
import React from 'react'
import logoImage from 'public/assets/logo.svg'

const AppLogo: React.FC = () => {
    return (
        <div className="hidden place-content-center lg:grid">
            <Image
                src={logoImage}
                alt="logo image"
            />
        </div>
    )
}

export default AppLogo

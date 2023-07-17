import CustomButton from '@/components/atoms/CustomButton'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import logoImage from 'public/assets/logo.svg'

const SignIn = async () => {
    const providers = await getProviders()
    if (!providers) return null
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-700">
            <div className="flex flex-col items-center space-y-12">
                <Image
                    src={logoImage}
                    alt="logo image"
                    width={500}
                    height={300}
                />
                {Object.values(providers).map((provider) => (
                    <CustomButton
                        providerId={provider.id}
                        key={provider.name}
                    >
                        Sign in with {provider.name}
                    </CustomButton>
                ))}
            </div>
        </div>
    )
}

export default SignIn

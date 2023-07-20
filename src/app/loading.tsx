'use client'
import React from 'react'
import { Oval } from 'react-loader-spinner'
type Props = {}

const loading = (props: Props) => {
    return (
        <div className="fixed inset-0 grid place-content-center">
            <Oval
                height={80}
                width={80}
                color="#F39765"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#E46643"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    )
}

export default loading

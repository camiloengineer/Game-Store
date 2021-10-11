import React from 'react'
import { FormLogin } from '../../components/common/FormLogin'

export const LoginView = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 gap-4'>
            <div>
                <FormLogin />
            </div>
        </div>
    )
}

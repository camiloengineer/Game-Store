import React from 'react'
import { Item } from '../../components/common/Item'

export const HomeView = () => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Game Store
                    </h1>
                </div>
            </header>
            <div className='max-w-7xl container mx-auto grid grid-cols-1 gap-4'>
                <div>
                    <Item />
                </div>
            </div>
        </>
    )
}

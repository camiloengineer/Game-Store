import React from 'react'
import Features from '../../components/common/Features'
import FeaturesBlocks from '../../components/common/FeaturesBlocks'
import HeroHome from '../../components/common/HeroHome'
import Newsletter from '../../components/common/Newsletter'
import Testimonials from '../../components/common/Testimonials'

export const AboutView = () => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        About
                    </h1>
                </div>
            </header>
            <div className='container mx-auto'>
                <Features />
                <FeaturesBlocks />
                <Testimonials />
            </div>
        </>
    )
}

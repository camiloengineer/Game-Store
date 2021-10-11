import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import cover from './../../assets/images/mortal-kombat.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const Item = () => {

    const { counter, increment, reset, decrement } =useCounter(0);
    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-16 my-0">
            <img className="w-full hover:opacity-75" src={ cover } alt="Mortal Kombat PS5" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mortal Kombat</div>
                <p className="text-sm font-medium text-gray-900">$35</p>
                <p className="text-gray-700 text-base">
                    Items: {counter}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <button
                    onClick={ increment }
                    className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded mx-1"
                >
                    <FontAwesomeIcon className="text-white mr-2" icon={ faShoppingCart } />
                    Add to Cart
                </button>
                <button
                    onClick={ reset }
                    className="bg-transparent hover:bg-purple-500 text-purple-700 hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded mx-1"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

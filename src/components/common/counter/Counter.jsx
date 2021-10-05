import Reac from 'react'
import { useCounter } from '../../hooks/useCounter';

export const Counter = () => {

    const { counter, increment, reset, decrement } =useCounter(0);

    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-16">
            <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">An useState Hook Example</div>
                <p className="text-gray-700 text-base">
                    Counter: {counter}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <button
                    onClick={ () => increment() }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1"
                >
                    Increment
                </button>
                <button
                    onClick={ () => reset() }
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1"
                >
                    Reset
                </button>
                <button
                    onClick={ () => decrement() }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

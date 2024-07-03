import React from 'react'

function Header() {
    return (
        <>
            <div className='my-5 mx-5 py-5'>
                <div className='flex justify-center py-2'>
                    <img className='h-auto w-20 rounded-full' src="https://i.pinimg.com/564x/e9/5f/d5/e95fd5d7b29e86f9c99728bc62af5e6e.jpg" alt="" />
                </div>
                <h1 className='text-2xl font-semibold'>Dipanjan saha</h1>
                <ul className='flex flex-row justify-center py-4'>
                    <li className='px-2'>kolkata</li>
                    <li className='px-2'>he/him</li>
                </ul>
                <h1>Trying to be Full stack Developer to create
                    pixel-perfect web experiences</h1>
            </div>
        </>

    )
}

export default Header
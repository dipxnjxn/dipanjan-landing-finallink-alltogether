import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='my-10'>
      <h1 className='font-semibold'>made with love 
        <Link to='https://www.instagram.com/dipxnjxn_/' target='blank'>
          <span className='hover:text-cyan-900 sha'> Dipanjan</span>
        </Link>
      </h1>
    </div>
  )
}

export default Footer
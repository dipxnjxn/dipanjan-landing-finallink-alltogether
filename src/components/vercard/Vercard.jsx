import React from 'react'
import { Link } from 'react-router-dom'

function Vercard(props) {
  return (
    <Link to={props.link}>
    <p className=' transition-all border-2 font-semibold hover:bg-cyan-200 border-pink-900 mx-7 rounded-full p-1 my-4'>
        {props.tittle}
    </p>
    </Link>
  )
}

export default Vercard
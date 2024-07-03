import React from 'react'
import { Link } from 'react-router-dom'
function Social(props) {
  return (
        <Link to={props.tittle} target='blank'><img className='transition-all w-6 h-auto sha sm:w-8' src={props.link} alt="" /></Link>
  )
}

export default Social
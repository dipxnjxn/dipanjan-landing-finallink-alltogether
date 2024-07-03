import React from 'react'
import { Link } from 'react-router-dom'

function Err() {
  return (
<>
<center class="h-screen flex flex-col items-center justify-center center">
<h1 className='text-7xl font-semibold uppercase'>Comming soon</h1>
<br />
<Link to='/'><p className='text-2xl'>click here to go back</p></Link>
</center>
</>
  )
}

export default Err

import React from 'react'
import img from '../cine.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex border items-center space-x-10 pl-3 py-4'>
            <img className=' w-[50px]'
             src={img} alt="" />
             <Link to="/" className='text-2xl text-purple-700 font-bold'>Home</Link>
             <Link to="/watchlist" className='text-2xl text-purple-700 font-bold'>WatchList</Link>
        </nav>
    
    </>
  )
}

export default Navbar
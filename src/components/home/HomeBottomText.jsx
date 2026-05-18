import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='overflow-hidden pb-2 font-[font2] flex items-center  justify-center gap-2 '>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-35 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-35  flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/agency'>agency</Link>
      </div>
    </div>
    // <div className='font-[font2] gap-2 flex justify-center items-center text-bold'>
    //   <Link to='/projects' className='text-[5.5vw] uppercase border-4 leading-[5vw] border-white rounded-full px-10 pt-1'>Projects</Link>
    //   <Link to='/agency' className='text-[5.5vw] uppercase border-4 leading-[5vw] border-white rounded-full px-10 pt-1'>Agency</Link>
    // </div>
  )
}

export default HomeBottomText

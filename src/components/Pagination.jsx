import React from 'react'

const Pagination = ({pageNo,prevPage,nextPage}) => {
  return (
   <>
    <div className='bg-gray-300 flex items-center justify-center gap-5 font-bold text-xl w-full mt-5 p-2'>
    <div onClick={prevPage}><i className="fa-solid fa-arrow-left cursor-pointer"></i></div>
    <h1>{pageNo}</h1>
    <div onClick={nextPage}><i className="fa-solid fa-arrow-right-long cursor-pointer"></i></div>
    </div>
   </>
  )
}

export default Pagination
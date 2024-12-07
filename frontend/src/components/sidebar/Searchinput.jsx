import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search_' className='input input-sm input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle btn-sm bg-sky-300 text-white'><IoSearchSharp /></button>
    </form>
  )
}

export default SearchInput

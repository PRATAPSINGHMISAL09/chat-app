import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useGetConvo from '../../hooks/useGetConvo';
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';
import { useState } from 'react';
const SearchInput = ()=> {
  const [search , setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConvo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return ;
    if(search.length < 3) return toast.error("Search must be at least 3 characters long");

    const conversation = conversations.find((convo) => convo.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation){ return setSelectedConversation(conversation);
    setSearch('');}
    else toast.error("User not found");
    
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search_' className='input input-sm input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle btn-sm bg-sky-300 text-white'><IoSearchSharp /></button>
    </form>
  )
}

export default SearchInput

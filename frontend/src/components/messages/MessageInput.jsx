import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';
function MessageInput() {
  const[message,setMessage] = useState("");
  const{loading,sendMessage} = useSendMessage()
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!message) return ;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className='py-4 my-3 ' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" className='border text-lg rounded-full w-full p-2.5 bg-cyan-200 border-slate-600 text-slate-800' 
            placeholder='Send message...'
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>
                {loading ? <div className='loading loading-spinner'></div> : <BsSend/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput

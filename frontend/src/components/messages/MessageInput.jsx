import React from 'react'
import {BsSend} from 'react-icons/bs'
function MessageInput() {
  return (
    <form className='py-4 my-3 '>
        <div className='w-full relative'>
            <input type="text" className='border text-lg rounded-full w-full p-2.5 bg-cyan-200 border-slate-600 text-slate-800' 
            placeholder='Send message...'
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput

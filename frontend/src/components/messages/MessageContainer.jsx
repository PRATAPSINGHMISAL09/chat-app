import React from 'react'
import Messages from './Messages'

function MessageContainer() {
  return (
    <div className='md:min-w-[650px] flex flex-col'>
        <>
        <div className='bg-slate-900 px-4 py-2 mb-2'>
            <span className='label-text text-blue-400'>To:</span>
            <span className='text-white font-sans'> John Doe</span>
        </div>

        <Messages/>
        {/* <MessageInput/> */}
        </>
      
    </div>
  )
}

export default MessageContainer

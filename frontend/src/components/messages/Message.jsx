import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';

function Message({message}) {
  const {authUser}= useAuthContext();
  const{selectedConversation}=useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="" alt="user avatar" />
            </div>
        </div>
      <div className={'chat-bubble text-white bg-cyan-400'}> Hi! WhatsUp</div>
      <div className='chat-footer text-white opacity-80 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message
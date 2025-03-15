import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTIme } from '../../utils/extractTime';

function Message({message}) {
  const {authUser}= useAuthContext();
  const{selectedConversation}=useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedtime = extractTIme(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilepic = fromMe ? authUser.profilepic : selectedConversation.profilepic;
  const bubblebgcolor = fromMe ? 'bg-blue-500' : '';
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilepic} alt="user avatar" />
            </div>
        </div>
      <div className={`chat-bubble text-white ${bubblebgcolor} ${shakeClass}`}>{message.message}</div>
      <div className='chat-footer text-white opacity-80 text-xs flex gap-1 items-center'>{formattedtime}</div>
    </div>
  )
}

export default Message
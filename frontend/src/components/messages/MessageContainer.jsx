import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';

const MessageContainer = ()=> {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(()=>{

    return ()=> setSelectedConversation(null) //CLEAN-UP function
  },[setSelectedConversation])

  if (!selectedConversation) {
    return <NoChatSelected />;
  }
  return (
    <div className="md:min-w-[650px] flex flex-col">
      <div className="bg-slate-900 px-4 py-2 mb-2">
        <span className="label-text text-blue-400">To:</span>
        <span className="text-white font-sans">
          {selectedConversation.fullname || 'Unknown User'}
        </span>
      </div>
      <Messages />
      <MessageInput />
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome, John Doe</p>
        <p>Start a conversation</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

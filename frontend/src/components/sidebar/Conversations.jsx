//ALL CONVERSATIONS IN THE SIDEBAR

import React from 'react'
import Convo from './Convo'
import useGetConvo from '../../hooks/useGetConvo.js';
function Conversations() {
   const {loading ,conversations} = useGetConvo();
   console.log("CONVERSATIONS:", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>

    {conversations.map((conversation,idx)=>(
      <Convo
       key={conversation._id}
       conversation={conversation}
       lastIdx={idx === conversations.length-1}
      />
    ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
      </div>
  )
}

export default Conversations

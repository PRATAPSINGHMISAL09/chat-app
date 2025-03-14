import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { messages, loading } = useGetMessages(); // Ensure messages is defined
  useListenMessages();
  const lastmsgref = useRef();

  // Ensure messages is always an array
  const safeMessages = Array.isArray(messages) ? messages : [];

  useEffect(() => {
    setTimeout(() => {
      lastmsgref.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [safeMessages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && safeMessages.length > 0 &&
        safeMessages.map((message) => (
          <div key={message._id} ref={lastmsgref}>
            <Message message={message} />
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && safeMessages.length === 0 && (
        <p className="text-center">Send a message to start chatting</p>
      )}
    </div>
  );
}

export default Messages;

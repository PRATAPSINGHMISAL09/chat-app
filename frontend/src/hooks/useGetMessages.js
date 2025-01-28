import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return; // Prevent unnecessary API calls
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch messages: ${res.statusText}`);
        }
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        toast.error(error.message || "Failed to load messages");
        setMessages([]); // Reset messages on error
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id]); // Remove setMessages from dependency array

  return { messages, loading };
};

export default useGetMessages;

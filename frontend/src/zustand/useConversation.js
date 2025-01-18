import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => {
    console.log("Selected conversation set:", selectedConversation); 
    set({ selectedConversation });
  },
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;

import { useState } from 'react';
export const useMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'bot' },
    { id: 2, text: 'Hi there!', sender: 'me' },
  ]);
  const sendMessage = (text:any) => {
    const newMessage = { id: Date.now(), text, sender: 'me' };
    setMessages([...messages, newMessage]);
  };
  return { messages, sendMessage };
};
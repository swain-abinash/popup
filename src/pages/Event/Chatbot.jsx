import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);

  const toggleChat = () => {
    setOpen(!open);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    const newMessage = { sender: 'user', text: inputValue };
    const botReply = { sender: 'bot', text: 'Thank you for your message!' };
    setMessages([...messages, newMessage, botReply]);
    setInputValue('');
  };

  return (
    <>
      <ChatButton onClick={toggleChat}>
        {open ? <CloseIcon /> : <ChatIcon />}
      </ChatButton>

      {open && (
        <ChatWindow>
          <ChatHeader>
            <Typography variant="h6">Futuristic Chatbot</Typography>
          </ChatHeader>

          <ChatMessages>
            {messages.map((msg, index) => (
              <MessageBubble key={index} sender={msg.sender}>
                {msg.text}
              </MessageBubble>
            ))}
          </ChatMessages>

          <ChatInput>
            <StyledTextField
              variant="outlined"
              placeholder="Type your message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              fullWidth
              size="small"
            />
            <SendButton onClick={handleSend}>
              <SendIcon />
            </SendButton>
          </ChatInput>
        </ChatWindow>
      )}
    </>
  );
};

export default Chatbot;

const ChatButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(45deg, #6a00f4, #ff00c8);
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(255, 0, 200, 0.7);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: float 2s ease-in-out infinite;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 30px rgba(255, 0, 200, 1);
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }
`;
const ChatWindow = styled(Box)`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 350px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 30px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;
const ChatHeader = styled(Box)`
  background: linear-gradient(45deg, #6a00f4, #ff00c8);
  color: white;
  padding: 15px;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const ChatMessages = styled(Box)`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MessageBubble = styled(Box)`
  align-self: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
  background: ${(props) =>
    props.sender === 'user'
      ? 'linear-gradient(45deg, #ff00c8, #6a00f4)'
      : 'linear-gradient(45deg, #f0f0f0, #d9d9d9)'};
  color: ${(props) => (props.sender === 'user' ? 'white' : '#333')};
  padding: 12px 18px;
  border-radius: 12px;
  max-width: 250px;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;
const ChatInput = styled(Box)`
  display: flex;
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
`;
const StyledTextField = styled(TextField)`
  margin-right: 10px;

  & .MuiOutlinedInput-root {
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
  }
`;
const SendButton = styled(Button)`
  background: linear-gradient(45deg, #6a00f4, #ff00c8);
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
  &:hover {
    background: linear-gradient(45deg, #7000f4, #ff30c8);
  }
`;

import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const ChatBox = () => {
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const {user} = useContext(AuthContext)

  const ChatClick = (event) => {
    if (event.target.id === "chat-container") {
      if (showChatBubble) {
        setAnimateOut(true);
        setTimeout(() => {
          setShowChatBubble(false);
          setAnimateOut(false);
        }, 350); // Matches the animation duration
      } else {
        setShowChatBubble(true);
      }
    }
  };

  return (
    <ChatBoxDiv id="chat-container" $showChatBubble={showChatBubble} onClick={(e) => ChatClick(e)}>
      {showChatBubble && <ChatBubble $animateOut={animateOut}>{user ? "Hi, Send Query to admin if you like any product. You can Also access the Cart. Enjoy your time here." : "Hi, Please login for better experience. No cart available until login completion. Enjoy your time here."}</ChatBubble>}
    </ChatBoxDiv>
  );
};

// Slide-in animation
const SlideIn = keyframes`
  0% {
    transform: translateX(30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Fade-out and slide-out animation
const SlideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(30px);
    opacity: 0;
  }
`;

const ChatBoxDiv = styled.div`
  width: 35px;
  height: 35px;
  position: fixed;
  bottom: 6%;
  right: 3%;
  border-radius: 5rem;
  border-top-right-radius: ${({ $showChatBubble }) => ($showChatBubble ? "15px" : "5rem")};
  background-color: #0ea5e9;
  transition: all 0.5s ease-out;

  @media (max-width: 768px){
    display: none;
  }
`;

const ChatBubble = styled.div`
  width: 150px;
  height: auto;
  padding: 15px;
  border-radius: 20px;
  border-bottom-right-radius: 5px;
  position: absolute;
  right: 0;
  bottom: 40px;
  background-color: white;
  opacity: 0;
  animation: ${({ $animateOut }) => ($animateOut ? SlideOut : SlideIn)} 0.5s ease-in-out forwards;
`;

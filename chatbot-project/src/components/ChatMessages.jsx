import { useRef, useEffect } from "react";
import { ChatMsg } from "./ChatMsg";  

function ChatMessages({ messages }) {
  const container = useRef(null);
  useEffect(() => {
    const containerElem = container.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [messages]);
  return (
    <div ref={container}>
      {messages.map((message) => {
        return (
          <ChatMsg
            message={message.message}
            sender={message.sender}
            key={message.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
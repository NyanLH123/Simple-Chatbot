import { useState } from "react";
import ChatInput from "./components/ChatInput";
import "./App.css";
import ChatMessages from "./components/ChatMessages";


function App() {
  const [messages, setMessages] = useState([
    { id: 1, message: "hello chatbot", sender: "user" },
    { id: 2, message: "Hello! How can I help you?", sender: "robot" },
    { id: 3, message: "can you get me today date?", sender: "user" },
    { id: 4, message: "Today is December 13", sender: "robot" },
  ]);

  // Where components are displayed
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col h-[550px] border border-gray-200">
      <div className="bg-blue-600 p-4 text-white font-bold text-center shadow-sm">
        Chatbot Assistant
      </div>

      <div className="flex-1 overflow-y-scroll p-4 space-y-4 bg-gray-50">
        <ChatMessages messages={messages} />
      </div>

      <div className="p-4 border-t bg-white">
        <ChatInput messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;

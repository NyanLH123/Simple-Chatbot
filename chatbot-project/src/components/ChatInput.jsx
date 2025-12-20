import { useState } from "react";
import { Chatbot } from "supersimpledev";


function ChatInput({ messages, setMessages }) {
  const [input, setInput] = useState("");

  // Sending message logic
  function sendMessage() {
    if (input.trim() === "") return;

    // Accept messages from user
    const newChatMessage = [
      ...messages,
      { message: input, sender: "user", id: crypto.randomUUID() },
    ];

    // Update messages state
    setMessages(newChatMessage);

    // Get response from External Library Chatbot
    const response = Chatbot.getResponse(input);

    // Update messages state with chatbot response
    setMessages([
      ...newChatMessage,
      { message: response, sender: "robot", id: crypto.randomUUID() },
    ]);

    // Clear input field after sending
    setInput("");
  }

  // Handle key events for Enter and Escape
  const saveInput = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInput("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Send a message to Chatbot"
        onChange={(event) => setInput(event.target.value)}
        value={input}
        onKeyDown={saveInput}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
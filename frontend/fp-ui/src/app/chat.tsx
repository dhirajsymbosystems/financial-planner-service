"use client";
import { useState } from "react";
import { Send, Mic, Paperclip } from "lucide-react";
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}
export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: messages.length + 2,
          text: "Thanks for your message. I'm a demo bot.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };
  return (
    <div className="flex flex-col h-full w-full w-full max-w-[40%] mx-auto border h-[800px] border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-300 text-white p-4 flex items-center justify-between">
        <div className="flex">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
            AI
          </div>
          <div className="flex items-center space-x-4 pl-3 pt-0.5">
            <div>
              <h2 className="text-l font-semibold">Chat Bot</h2>
              <p className="text-sm opacity-90">Online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[600px] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-1 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender !== "user" && (
              <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                AI
              </div>
            )}
            <div className="flex flex-col w-auto max-w-[80%] leading-3 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white p-3">
                {message.text}
              </p>
            </div>
            {message.sender === "user" && (
              <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                You
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t bg-gray-300 p-4">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full flex items-center justify-center mr-2 bg-gray-200">
            <button className="text-gray-500 hover:text-gray-700">
              <Paperclip className="w-5 h-5" />
            </button>
          </div>
          <div className="h-10 w-10 rounded-full flex items-center justify-center mr-2 bg-gray-200">
            <button className="text-gray-500 hover:text-gray-700">
              <Mic className="w-5 h-5" />
            </button>
          </div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

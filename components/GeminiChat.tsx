
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "Hi! I'm the Tech Skyline AI Assistant. Ask me about our courses, IT consulting services, or certification programs!",
      sender: ChatSender.BOT,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Use process.env.API_KEY directly as per the coding guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are an expert AI assistant for "Tech Skyline IT Solutions". 
        Your tone is professional, encouraging, and knowledgeable.
        
        Key Info:
        - We offer 100+ interactive online courses (Java, Python, AWS, DevOps, Testing, etc.).
        - We provide IT Consulting, Staffing, and Corporate Training.
        - We train 3000+ students/year globally (USA, UK, Canada, Australia).
        - Contact Email: techskylineitsolutions20204@gmail.com
        - Contact Phone: +1-408-614-0468
        - Philosophy: Real-time project scenarios, hands-on labs, interview prep.
        
        Answer user questions about course availability, consulting services, and company details accurately based on this info.
        Keep answers concise (under 100 words) unless asked for details.
      `;

      // Use 'gemini-3-flash-preview' for basic text tasks as per model guidelines.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
            systemInstruction: systemInstruction,
        }
      });

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response.text || "I apologize, I couldn't process that request.",
        sender: ChatSender.BOT,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Gemini Error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting to the server right now. Please try again later.",
        sender: ChatSender.BOT,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-medium hidden sm:inline">Chat with us</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[380px] h-[500px] flex flex-col border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <div>
                <h3 className="font-bold text-sm">Tech Skyline AI</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === ChatSender.USER
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                  <span className="text-xs text-gray-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about courses..."
                className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`p-2 rounded-full ${
                  isLoading || !input.trim() ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;

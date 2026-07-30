'use client'

import { useState } from 'react'

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: "Hi! I'm the Neutron Controls assistant. What can I help you with?" }
    ]);
    const [input, setInput] = useState('');
    function handleSend() {
        if (input.trim() === '') return;

        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
    }


    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
            {open && (
    <div className="mb-3 w-80 h-96 bg-[#0d0e10] border border-white/10 rounded-2xl shadow-2xl flex flex-col p-4 gap-2">
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
            {messages.map((m, i) => (
                <div
                key={i}
                className={
                    m.role === 'user'
                    ? 'ml-auto bg-emerald-500 text-black text-sm rounded-xl px-3 py-2 max-w-[85%] break-words'
                    : 'bg-white/10 text-white text-sm rounded-xl px-3 py-2 max-w-[85%] break-words'
                }
                >
                {m.text}
                </div>
            ))}
        </div>

        <div className="flex gap-2">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question…"
                className="flex-1 bg-white/10 text-white text-sm rounded-full px-3 py-2 outline-none"
            />
            <button
                onClick={handleSend}
                className="bg-emerald-500 text-black text-sm px-3 rounded-full"
            >
                Send
            </button>
        </div>
    </div>
)}

            <button
                onClick={() => setOpen(!open)}
                className="w-24 h-14 flex items-center justify-center bg-emerald-500 text-black rounded-full"
            >
                {open ? 'Close' : 'Chat'}
            </button>
        </div>
    )
}
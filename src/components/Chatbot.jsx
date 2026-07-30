'use client'

import { useState, useRef, useEffect, use } from 'react'

const knowledgeBase = [
    {
        keywords: ['product', 'products', 'what do you make?', 'what do you sell?', 'what do you offer?', 'what do you make', 'what do you sell', 'what do you offer'],
        answer: "We make three core products: ENERG8TE (a customizable BMS/ESS controller), ECU8TR™ (a battery factory point tester), and ELEV8TR™ (an embedded development and simulation platform)."
    },
    {
        keywords: ['contact', 'reach', 'email', 'phone', 'get in touch'],
        answer: "You can reach us through our Contact page - we're based in Carelton Place, Ontario." },

    {
        keywords: ['career', 'careers', 'job', 'jobs', 'hiring', 'apply'],
        answer: "We don't have specific job openings listed right now, but you're welcome to submit your resume through our Careers page."
    },
    {
        keywords: ['energ8te', 'energy storage', 'ess controller', 'bms controller'],
        answer: "ENERG8TE™ is a customizable BMS/ESS controller built for Battery Energy Storage Systems, designed to adapt to different battery chemistries and system architectures."
    },
    {
        keywords: ['ecu8tr', 'factory point tester', 'point tester'],
        answer: "ECU8TR™ is a battery factory point tester supporting Infineon ISO UART, Analog Devices ISO SPI, and Texas Instruments UART/SPI interfaces."
    },
    {
        keywords: ['elev8tr', 'simulation platform', 'embedded development'],
        answer: "ELEV8TR™ is an embedded development and simulation platform for OEM BMS algorithm development."
    },
    {
        keywords: ['partner', 'partners', 'who do you work with'],
        answer: "We work with Infineon, MathWorks, TASKING, NXP, Texas Instruments, Jabil, and Analog Devices as technology and manufacturing partners."
    },
    {
        keywords: ['about', 'who are you', 'company', 'what is neutron controls'],
        answer: "Neutron Controls is a battery management systems company based in Carleton Place, Ontario. Our tagline is \"Contain Your Energy, Test Your Limits.\""
    }    
]

const starterChips = ['What products do you make?', 'How can I contact you?', 'Who are your partners?'];


function findAnswer (userText) {
    const lowerText = userText.toLowerCase();

    for (const entry of knowledgeBase) {
        for (const keyword of entry.keywords) {
            if (lowerText.includes(keyword.toLowerCase())) {
                return entry.answer;
            }
        }
    }
    return "I don't have a specfic answer for that. Please reach out to us through our Contact page for more information.";
}

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: "Hi! I'm the Neutron Controls assistant. What can I help you with?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [chips, setChips] = useState(starterChips);
    const scrollRef = useRef(null);

    function handleSend(overrideText) {
        const textToSend = overrideText || input;
        if (textToSend.trim() === '') return;

        const userMessage = { role: 'user', text: textToSend };
        const currentInput = textToSend;

        setMessages([...messages, userMessage]);
        setInput('');
        setChips([]);
        setIsTyping(true);

        setTimeout(() => {
            const botMessages = { role: 'bot', text: findAnswer(currentInput) };
            setMessages((prevMessages) => [...prevMessages, botMessages]);
            setChips(starterChips);
            setIsTyping (false);
        }, 1000);
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
            {open && (
    <div className="mb-3 w-80 h-96 bg-[#0d0e10] border border-white/10 rounded-2xl shadow-2xl flex flex-col p-4 gap-2">
        <div ref={scrollRef} className="flex-1 flex flex-col gap-2 overflow-y-auto">
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

            {isTyping && (
                <div className="bg-white/10 text-white/60 text-sm rounded-xl px-3 py-2 max-w-[85%]">
                    Typing...
                    </div>
            )}


        </div>

        

       
            {chips.length > 0 && (
            <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                    <button
                        key={chip}
                        onClick={() => handleSend(chip)}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                    >
                        {chip}
                    </button>
                ))}
            </div>
        )}
        
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
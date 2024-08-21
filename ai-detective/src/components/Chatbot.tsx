"use client";

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
    const [userMessage, setUserMessage] = useState('');
    const [botResponse, setBotResponse] = useState('');

    const sendMessage = async () => {
        try {
            const response = await axios.post('/api/chatbot', { userMessage });
            setBotResponse(response.data.botResponse);
        } catch (error) {
            console.error('Error sending message to chatbot:', error);
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md text-center">
            <h2 className="text-lg font-semibold mb-4 text-black">Ask the AI Detective</h2>
            <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-2 border rounded-md mb-4 text-black"
            />
            <button
                onClick={sendMessage}
                className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600"
            >
                Send
            </button>
            <div className="mt-4">
                <h3 className="text-lg font-medium text-black">AI Detective Response:</h3>
                <p className="text-black">{botResponse}</p>
            </div>
        </div>
    );
    
};

export default Chatbot;

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
        <div>
            <h2>Ask the AI Detective</h2>
            <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                <h3>AI Detective Response:</h3>
                <p>{botResponse}</p>
            </div>
        </div>
    );
};

export default Chatbot;

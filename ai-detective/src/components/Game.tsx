'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../store/slices/scoreSlice';
import axios from 'axios';

const Game: React.FC = () => {
    const [currentText, setCurrentText] = useState<string>('');
    const [correctSource, setCorrectSource] = useState<string>('');
    const [userChoice, setUserChoice] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string>('');

    const dispatch = useDispatch();

    useEffect(() => {
        fetchRandomText();
    }, []);

    const fetchRandomText = async () => {
        try {
            const response = await axios.get('/texts.json');
            const texts = response.data.texts;
            const randomIndex = Math.floor(Math.random() * texts.length);
            const randomText = texts[randomIndex];

            setCurrentText(randomText.text);
            setCorrectSource(randomText.source);
        } catch (error) {
            console.error('Error fetching texts:', error);
        }
    };

    const handleUserChoice = (choice: string) => {
        setUserChoice(choice);
        if (choice === correctSource) {
            setFeedback('Correct! Great job.');
            dispatch(increment());
        } else {
            setFeedback('Incorrect! This text was ' + correctSource + '.');
        }
    };
    return (
        <div className="p-4 bg-white shadow-md rounded-md text-center">
            <h2 className="text-lg font-semibold mb-2 text-black">Is this text AI-generated or real?</h2>
            <p className="mb-4 text-black">{currentText}</p>
            <div className="space-y-2">
                <button
                    onClick={() => handleUserChoice('ai')}
                    className="w-full px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600"
                >
                    AI
                </button>
                <button
                    onClick={() => handleUserChoice('real')}
                    className="w-full px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
                >
                    Real
                </button>
            </div>
            {userChoice && <p className="mt-4 text-black">{feedback}</p>}
            <button
                onClick={fetchRandomText}
                className="mt-4 px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600"
            >
                Try Another Text
            </button>
        </div>
    );
    
};

export default Game;

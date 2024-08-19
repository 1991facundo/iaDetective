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
        <div>
            <h2>Is this text AI-generated or real?</h2>
            <p>{currentText}</p>
            <button onClick={() => handleUserChoice('ai')}>AI</button>
            <button onClick={() => handleUserChoice('real')}>Real</button>
            {userChoice && <p>{feedback}</p>}
            <button onClick={fetchRandomText}>Try Another Text</button>
        </div>
    );
};

export default Game;

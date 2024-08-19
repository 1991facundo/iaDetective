"use client";

import React from 'react';
import Score from '../components/Score';
import Chatbot from '../components/Chatbot';
import Game from '../components/Game';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to AI Detective</h1>
            <Score />
            <Game />
            <Chatbot />
        </div>
    );
}
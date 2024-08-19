"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, reset } from '../store/slices/scoreSlice';

//definimos el componente Score
const Score: React.FC = () => {
    // useSelector nos permite acceder al estado global de Redux
    const score = useSelector((state: RootState) => state.score.value);
    // useDispatch nos permite despachar acciones para cambiar el estado
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Current Score: {score}</h1>
            <button onClick={() => dispatch(increment())}>Increase Score</button>
            <button onClick={() => dispatch(reset())}>Reset Score</button>
        </div>
    );
};

export default Score;

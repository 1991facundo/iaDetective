"use client";

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, reset } from '../store/slices/scoreSlice';

//definimos el componente Score
const Score: React.FC = () => {
    // useSelector nos permite acceder al estado global de Redux 
    const score = useSelector((state: RootState) => state.score.value);
    const level = useSelector((state : RootState) => state.score.level)
    // useDispatch nos permite despachar acciones para cambiar el estado
    const dispatch = useDispatch();


    useEffect(() => {
        if (score !== 0 && score %10 ==0){
            //mensaje cuando el jugador alcanza un nuevo nivel
            //esto se cambiara por alguna animacion
            alert (` Congratulations, you´ve earned a new level ${level}!`)
        }
    }), [score, level]

    return (
        <div>
            <h1>Current Score: {score}</h1>
            <h1>Current Score: {level}</h1>
            <button onClick={() => dispatch(increment())}>Increase Score</button>
            <button onClick={() => dispatch(reset())}>Reset Score</button>
        </div>
    );
};

export default Score;

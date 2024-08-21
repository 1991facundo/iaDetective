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
        <div className="p-4 bg-white shadow-md rounded-md text-center">
            <h1 className="text-xl font-bold mb-2 text-black">Current Score: {score}</h1>
            <h2 className="text-lg mb-4 text-black">Current Level: {level}</h2>
            <div className="space-x-2">
                <button
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Increase Score
                </button>
                <button
                    onClick={() => dispatch(reset())}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Reset
                </button>
            </div>
        </div>
    );
    
};

export default Score;

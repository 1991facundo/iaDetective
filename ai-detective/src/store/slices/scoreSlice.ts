import { createSlice } from '@reduxjs/toolkit';

// definimos la estructura del estado para la puntuacion
interface ScoreState {
    value: number;
}

// estado inicial, donde la puntuacion comienza en 0
const initialState: ScoreState = {
    value: 0,
};

// creamos el slice con nombre, estado inicial, y reducers
export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        // reducer para incrementar la puntuacion
        increment: (state) => {
            state.value += 1;
        },
        // eeducer para resetear la puntuacion
        reset: (state) => {
            state.value = 0;
        },
    },
});

// exportamos las acciones para usarlas en los componentes
export const { increment, reset } = scoreSlice.actions;

// exportamos el reducer para agregarlo al store
export default scoreSlice.reducer;

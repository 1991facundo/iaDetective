import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './slices/scoreSlice';

// configuramos el store con el reducer del slice de puntuacion
export const store = configureStore({
    reducer: {
        score: scoreReducer,
    },
});

// tipos adicionales para ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit'
import trackSlice from "./tracks";

export const store = configureStore({
    reducer: {
        tracks: trackSlice
    },
})

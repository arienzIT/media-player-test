import {createSlice} from '@reduxjs/toolkit'
import {trackReducers} from "./reducers";

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState: {
        list: [],
        activeId: null,
    },
    reducers: trackReducers
})

export const {
    setTracks,
    removeTrack,
    playTrack,
    pauseTrack,
    playNextTrack,
    playPreviousTrack,
    updateTrackOrder
} = tracksSlice.actions

export default tracksSlice.reducer

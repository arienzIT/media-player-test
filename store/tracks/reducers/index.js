import {getUniqueListByKey} from "../../../../helpers/getUniqueListByKey";
import {arrayMove} from "../../../../helpers/arrayMove";

export const trackReducers = {
    setTracks: (state, action) => {
        // Remove duplicates from API response
        state.list = getUniqueListByKey(action.payload, 'Track URI')
    },

    updateTrackOrder: (state, action) => {
        state.list = arrayMove(state.list, action.payload.oldIndex, action.payload.newIndex)
    },

    removeTrack: (state, action) => {
        state.list = state.list.filter((track) => track.id !== action.payload)
    },

    playTrack: (state, action) => {
        state.activeId = action.payload
    },

    pauseTrack: (state) => {
        state.activeId = null
    },

    playNextTrack: (state) => {
        const activeTrackIndex = state.list.findIndex((track) => state.activeId === track.id)
        state.activeId = state.list[activeTrackIndex + 1].id
    },

    playPreviousTrack: (state) => {
        const activeTrackIndex = state.list.findIndex((track) => state.activeId === track.id)
        state.activeId = state.list[activeTrackIndex - 1].id
    }
}

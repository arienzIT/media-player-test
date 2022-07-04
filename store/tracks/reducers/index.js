import {uniqBy} from "../../../helpers/uniqBy";
import {arrayMove} from "../../../helpers/arrayMove";
import {TrackMapper} from "../../../mappers/track";

export const trackReducers = {
    setTracks: (state, action) => {
        // Remove duplicates from API response
        const uniqueTracks = uniqBy(action.payload, 'Track URI')

        state.list = uniqueTracks.map(TrackMapper.fromResponseToObject)
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

        // If last track, play first song
        if (activeTrackIndex === state.list.length - 1) {
            state.activeId = state.list[0].id
            return
        }

        state.activeId = state.list[activeTrackIndex + 1].id
    },

    playPreviousTrack: (state) => {
        const activeTrackIndex = state.list.findIndex((track) => state.activeId === track.id)

        // If first track, play last song
        if (!activeTrackIndex) {
            state.activeId = state.list[state.list.length - 1].id
            return
        }

        state.activeId = state.list[activeTrackIndex - 1].id
    }
}

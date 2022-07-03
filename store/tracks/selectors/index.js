export const activeTrack = (state) => {
    return state.tracks.list.find((track) => track.id === state.tracks.activeId)
}

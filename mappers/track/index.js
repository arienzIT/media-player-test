
export class TrackMapper {
    static fromResponseToObject (trackResponse) {
        return {
            id: trackResponse['Track URI'],
            title: trackResponse['Track Name'],
            albumTitle: trackResponse['Album Name'],
            albumCoverImage: trackResponse['Album Image URL'],
            duration: trackResponse['Track Duration (ms)'] / 1000,
            authors: trackResponse['Artist Name(s)']
        }
    }
}

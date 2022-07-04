import {TrackMapper} from "./index";

describe('TrackMapper', () => {
    it('parses single track from API response', () => {
        // Arrange.
        const trackApiResponse = {
            ['Track URI']: 'track-id',
            ['Track Name']: 'Sample track name',
            ['Album Name']: 'Sample album name',
            ['Album Image URL']: 'album-cover-image.jpg',
            ['Track Duration (ms)']: 10000,
            ['Artist Name(s)']: 'First Author, Second Author'
        }

        // Act.
        const result = TrackMapper.fromResponseToObject(trackApiResponse)

        // Assert.
        expect(result).toStrictEqual({
            id: 'track-id',
            title: 'Sample track name',
            albumTitle: 'Sample album name',
            albumCoverImage: 'album-cover-image.jpg',
            duration: 10,
            authors: 'First Author, Second Author'
        })
    })
})

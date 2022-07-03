import {activeTrack} from "./index";

describe('activeTrack', () => {
    it('returns active item', () => {
        // Arrange.
        const state = {
            tracks: {
                activeId: 'active-track-id',
                list: [
                    { id: 'active-track-id' },
                    { id: 'inactive-track-id' },
                ]
            }
        }

        // Act.
        const result = activeTrack(state)

        // Assert.
        expect(result).toStrictEqual({ id: 'active-track-id' })
    })
})

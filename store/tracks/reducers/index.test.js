import {uniqBy} from "../../../helpers/uniqBy";
import {arrayMove} from "../../../helpers/arrayMove";
import {trackReducers} from "./index";

jest.mock('../../../helpers/uniqBy', () => ({
    uniqBy: jest.fn()
}))

jest.mock('../../../helpers/arrayMove', () => ({
    arrayMove: jest.fn()
}))

describe('tracks reducers', () => {
    let state
    beforeEach(() => {
        state = {
            list: [],
            activeId: null
        }
    })

    describe('setTracks', () => {
        it('sets list', () => {
            // Arrange.
            const payload = [{ ['Track URI']: 'track-id' }]
            uniqBy.mockReturnValue(payload)

            // Act.
            trackReducers.setTracks(state, { payload })

            // Assert.
            expect(state.list).toStrictEqual([
                expect.objectContaining({ id: 'track-id' })
            ])
        })
    })

    describe('updateTrackOrder', () => {
        it('updates list order', () => {
            // Arrange.
            const payload = {
                oldIndex: 2,
                newIndex: 3
            }
            const updatedArray = ['updated list']
            arrayMove.mockReturnValue(updatedArray)

            // Act.
            trackReducers.updateTrackOrder(state, { payload })

            // Assert.
            expect(state.list).toStrictEqual(updatedArray)
        })
    })

    describe('removeTrack', () => {
        it('removes an item from the list', () => {
            // Arrange.
            const payload = 'track-id-to-remove'
            state = {
                list: [
                    { id:'track-id' },
                    { id: 'track-id-to-remove' }
                ]
            }

            // Act.
            trackReducers.removeTrack(state, payload)

            // Assert.
            expect(state.list).not.toContain({ id: 'track-id-to-remove' })
        })
    })

    describe('playTrack', () => {
        it('sets active id', () => {
            // Arrange.
            const payload = 'active-track-id'

            // Act.
            trackReducers.playTrack(state, { payload })

            // Assert.
            expect(state.activeId).toStrictEqual('active-track-id')
        })
    })

    describe('pauseTrack', () => {
        it('unset active id', () => {
            // Arrange.
            state = {
                activeId: 'active-track-id'
            }

            // Act.
            trackReducers.pauseTrack(state)

            // Assert.
            expect(state.activeId).toBeNull()
        })
    })

    describe('playNextTrack', () => {
        it('sets next active id', () => {
            // Arrange.
            state = {
                activeId: 'track-id-1',
                list: [
                    { id: 'track-id-1' },
                    { id: 'track-id-2' },
                ]
            }

            // Act.
            trackReducers.playNextTrack(state)

            // Assert.
            expect(state.activeId).toStrictEqual('track-id-2')
        })
    })

    describe('playPreviousTrack', () => {
        it('sets previous active id', () => {
            // Arrange.
            state = {
                activeId: 'track-id-2',
                list: [
                    { id: 'track-id-1' },
                    { id: 'track-id-2' },
                ]
            }

            // Act.
            trackReducers.playPreviousTrack(state)

            // Assert.
            expect(state.activeId).toStrictEqual('track-id-1')
        })
    })
})

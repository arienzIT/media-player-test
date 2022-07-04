import '@testing-library/jest-dom'
import {TrackProgress} from "./Index";
import {act, render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import tracksSlice from "../../../store/tracks";

describe('TrackProgress', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterAll(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    it('shows track progress based on duration', () => {
        // Arrange.
        const track = {
            id: 'track-id',
            title: 'Track title',
            albumTitle: 'Album title',
            albumCoverImage: 'album-cover-image-url',
            authors: 'Author 1, Author 2',
            duration: 10
        }
        const store = configureStore({
            reducer: {
                tracks: tracksSlice
            },
            preloadedState: {
                tracks: {
                    list: [track],
                    activeId: 'track-id'
                }
            }
        })

        render(
            <Provider store={store}>
                <TrackProgress/>
            </Provider>
        )

        // Act.
        act(() => {
            jest.runOnlyPendingTimers()
        })

        // Assert.
        expect(screen.getByText('10% played')).toBeInTheDocument()
    })

    it('plays next track after finishing', () => {
        // Arrange.
        const tracks = [
            {
                id: 'track-id',
                title: 'Track title',
                albumTitle: 'Album title',
                albumCoverImage: 'album-cover-image-url',
                authors: 'Author 1, Author 2',
                duration: 1
            },
            {
                id: 'track-id-2',
                title: 'Track title 2',
                albumTitle: 'Album title 2',
                albumCoverImage: 'album-cover-image-2-url',
                authors: 'Author 1, Author 2',
                duration: 2
            }
        ]
        const store = configureStore({
            reducer: {
                tracks: tracksSlice
            },
            preloadedState: {
                tracks: {
                    list: tracks,
                    activeId: 'track-id'
                }
            }
        })

        render(
            <Provider store={store}>
                <TrackProgress/>
            </Provider>
        )

        // Act.
        act(() => {
            jest.runOnlyPendingTimers()
        })

        // Assert.
        expect(screen.getByText('0% played')).toBeInTheDocument()
    })
})

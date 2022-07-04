import '@testing-library/jest-dom'
import {TrackList} from "./Index";
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import tracksSlice from "../../../store/tracks";

describe('List', () => {
    it('renders list of tracks', () => {
        // Arrange.
        const tracks = [
            {
                id: 'track-id',
                title: 'Track title',
                albumTitle: 'Album title',
                albumCoverImage: 'album-cover-image-url',
                authors: 'Author 1, Author 2'
            },
            {
                id: 'second-track-id',
                title: 'Second Track title',
                albumTitle: 'Second track album title',
                albumCoverImage: 'album-cover-image-url',
                authors: 'Author 1, Author 2'
            },
        ]
        const store = configureStore({
            reducer: {
                tracks: tracksSlice
            },
            preloadedState: {
                tracks: {
                    list: tracks
                }
            }
        })
        render(
            <Provider store={store}>
                <TrackList />
            </Provider>
        )

        // Assert.
        expect(screen.getByText(tracks[0].title)).toBeInTheDocument()
        expect(screen.getByText(tracks[1].title)).toBeInTheDocument()
    })
})

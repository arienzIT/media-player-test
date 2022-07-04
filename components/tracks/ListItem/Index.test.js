import '@testing-library/jest-dom'
import {TrackListItem} from "./Index";
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import tracksSlice from "../../../store/tracks";

describe('ListItem', () => {
    it('renders track information', () => {
        // Arrange.
        const track = {
            id: 'track-id',
            title: 'Track title',
            albumTitle: 'Album title',
            albumCoverImage: 'album-cover-image-url',
            authors: 'Author 1, Author 2'
        }
        const store = configureStore({
            reducer: {
                tracks: tracksSlice
            }
        })
        render(
            <Provider store={store}>
                <TrackListItem track={track} />
            </Provider>
        )

        // Assert.
        expect(screen.getByText(track.title)).toBeInTheDocument()
        expect(screen.getByText(track.albumTitle)).toBeInTheDocument()
        expect(screen.getByText(track.authors)).toBeInTheDocument()
        expect(screen.getByAltText(track.albumTitle)).toHaveAttribute('src', track.albumCoverImage)
    })
})

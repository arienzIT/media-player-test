import '@testing-library/jest-dom'
import {TrackFooter} from "./Index";
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import tracksSlice from "../../../store/tracks";

describe('TrackFooter', () => {
    it('renders track information', () => {
        // Arrange.
        const track = {
            id: 'track-id',
            title: 'Track title',
            albumTitle: 'Album title',
            albumCoverImage: 'album-cover-image-url',
            authors: 'Author 1, Author 2',
            duration: 60
        }
        const store = configureStore({
            reducer: {
                tracks: tracksSlice
            },
            preloadedState: {
                tracks: {
                    list: [ track ],
                    activeId: 'track-id'
                }
            }
        })
        render(
            <Provider store={store}>
                <TrackFooter track={track} />
            </Provider>
        )

        // Assert.
        expect(screen.getByText(track.title)).toBeInTheDocument()
        expect(screen.getByText(track.albumTitle)).toBeInTheDocument()
        expect(screen.getByText('01:00')).toBeInTheDocument()
    })
})

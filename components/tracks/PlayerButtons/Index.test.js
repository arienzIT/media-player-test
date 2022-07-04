import '@testing-library/jest-dom'
import {TrackPlayerButtons} from "./Index";
import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import tracksSlice from "../../../store/tracks";

describe('TrackPlayerButtons', () => {
    beforeEach(() => {
        const trackId = 'track-id'
        const store = configureStore({
            reducer: {
                tracks: tracksSlice
            }
        })
        render(
            <Provider store={store}>
                <TrackPlayerButtons trackId={trackId} />
            </Provider>
        )
    })
    it('plays a track', () => {
        // Act.
        fireEvent.click(screen.getByTestId('play-button'))

        // Assert.
        expect(screen.getByText('Pause')).toBeInTheDocument()
    })

    it('pause a track', () => {
        // Act.
        // Play track
        fireEvent.click(screen.getByTestId('play-button'))
        // Pause track
        fireEvent.click(screen.getByTestId('play-button'))

        // Assert.
        expect(screen.getByText('Play')).toBeInTheDocument()
    })

    it('renders previous and next buttons while playing', () => {
        // Act.
        fireEvent.click(screen.getByTestId('play-button'))

        // Assert.
        expect(screen.getByText('Previous')).toBeInTheDocument()
        expect(screen.getByText('Next')).toBeInTheDocument()
    })
})

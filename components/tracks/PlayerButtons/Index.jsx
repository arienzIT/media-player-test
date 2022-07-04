import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {PauseIcon, PlayIcon, RewindIcon} from "@heroicons/react/solid";
import PropTypes from "prop-types";
import {pauseTrack, playNextTrack, playPreviousTrack, playTrack} from "../../../store/tracks";

export const TrackPlayerButtons = ({ trackId }) => {
    const dispatch = useDispatch()

    const activeTrackId = useSelector((state) => state.tracks.activeId)

    const isPlaying = useMemo(() => {
        return activeTrackId && (activeTrackId === trackId)
    }, [activeTrackId, trackId])

    const togglePlay = useCallback(() => {
        const action = isPlaying ? pauseTrack : playTrack
        dispatch(action(trackId))
    }, [trackId, isPlaying])

    return (
        <div className="pb-2 text-gray-200 flex items-center justify-center">
            {isPlaying && (
                <RewindIcon
                    className="h-6 w-6 mr-2 hover:text-indigo-400"
                    onClick={() => dispatch(playPreviousTrack(trackId))}
                />
            )}
            <button
                type="button"
                className="inline-flex items-center border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={togglePlay}
            >
                {isPlaying
                    ? <PauseIcon className="h-12 w-12" aria-hidden="true"/>
                    : <PlayIcon className="h-12 w-12" aria-hidden="true"/>
                }
            </button>
            {isPlaying && (
                <RewindIcon
                    className="h-6 w-6 rotate-180 ml-2 hover:text-indigo-200"
                    onClick={() => dispatch(playNextTrack(trackId))}
                />
            )}
        </div>
    )
}

TrackPlayerButtons.propTypes = {
    trackId: PropTypes.string.isRequired
}

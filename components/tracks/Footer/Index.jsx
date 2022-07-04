import {useMemo} from "react";
import {useSelector} from "react-redux";
import {activeTrack} from "../../../store/tracks/selectors";
import {TrackProgress} from "../Progress";

export const TrackFooter = () => {
    const track = useSelector((state) => activeTrack(state))

    const durationInMinutes = useMemo(() => {
        return track
            ? new Date(track.duration * 1000).toISOString().slice(14, 19)
            : 0
    }, [track])

    const isPlaying = useMemo(() => {
        return !!track
    }, [track])

    return (
            <footer
                className={`bg-gray-50 border-t border-gray-300 h-32 fixed left-0 bottom-0 w-full px-8 flex items-center transition-transform duration-500
                ${isPlaying ? 'translate-y-0' : 'translate-y-full'}`}
            >
                {isPlaying && (
                    <div className="w-full max-w-5xl mx-auto flex flex-col text-center">
                        <dl>
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-900 text-sm font-medium">{track.title}</dd>
                            <dt className="sr-only">Album</dt>
                            <dd className="text-gray-500 text-sm mb-1">{track.albumTitle}</dd>
                            <dt className="sr-only">Duration</dt>
                            <dd className="text-gray-600 text-xs font-bold mb-2">{durationInMinutes}</dd>
                        </dl>
                        <TrackProgress/>
                    </div>
                )}
            </footer>
    )
}

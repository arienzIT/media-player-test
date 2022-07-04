import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {activeTrack} from "../../../store/tracks/selectors";
import {playNextTrack} from "../../../store/tracks";

export const TrackProgress = () => {
    const dispatch = useDispatch()
    const track = useSelector((state) => activeTrack(state))
    const [count, setCount] = useState(0)

    // Reset counter after changing track
    useEffect(() => {
        setCount(0)
    }, [track])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    })

    const progress = useMemo(() => {
        return 100 * count / track.duration
    }, [count, track])

    // play next track when current finishes
    useEffect(() => {
        if (progress >= 100) {
            dispatch(playNextTrack())
        }
    }, [progress])

    return (
        <div className="w-full h-2 rounded-lg bg-gray-300 relative w-full">
            <div className="absolute left-0 rounded-lg bg-indigo-500 w-full h-2 transition-all duration-1000 ease-linear"
                 style={{ width: `${progress}%` }}
            />
            <span className="sr-only">{progress}% played</span>
        </div>
    )
}

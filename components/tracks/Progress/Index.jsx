import {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {activeTrack} from "../../../store/tracks/selectors";

export const TrackProgress = () => {
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

    return (
        <div className="w-full h-2 rounded-lg bg-gray-300 relative w-full">
            <div className="absolute left-0 rounded-lg bg-indigo-500 w-full h-2 transition-all duration-1000 ease-linear"
                 style={{ width: `${progress}%` }}
            />
        </div>
    )
}

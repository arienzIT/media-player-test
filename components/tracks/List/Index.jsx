import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import SortableList, {SortableItem} from 'react-easy-sort'
import {updateTrackOrder} from "../../../store/tracks";
import {TrackListItem} from "../ListItem";


export const TrackList = () => {
    const dispatch = useDispatch()
    const tracks = useSelector((state) => state.tracks.list)

    const onSortEnd = useCallback((oldIndex, newIndex) => {
        dispatch(updateTrackOrder({oldIndex, newIndex}))
    }, [])

    return (
        <SortableList onSortEnd={onSortEnd}
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tracks.map((track) => (
                <SortableItem key={track.id}>
                    <div className="col-span-1 flex flex-1">
                        <TrackListItem key={track.id} track={track}/>
                    </div>
                </SortableItem>
            ))}
        </SortableList>
    )
}

import {TrashIcon} from "@heroicons/react/outline";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {TrackPlayerButtons} from "../PlayerButtons";
import {removeTrack} from "../../../store/tracks/reducers";

export const TrackListItem = ({track}) => {
    const dispatch = useDispatch()

    return (
        <li className="flex flex-1 flex-col text-center bg-white rounded-lg shadow">
            <div className="flex-1 flex flex-col p-8 relative">
                <button data-testid="delete-button">
                    <TrashIcon
                        className="w-6 h-6 absolute right-4 top-4 text-gray-400"
                        onClick={() => dispatch(removeTrack(track.id))}
                    />
                    <span className="sr-only">Delete</span>
                </button>
                <img className="w-24 h-24 flex-shrink-0 mx-auto rounded-full" src={track.albumCoverImage}
                     alt={track.albumTitle}/>
                <h3 className="mt-6 text-gray-900 text-sm font-medium">{track.title}</h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Album name</dt>
                    <dd className="text-gray-500 text-sm">{track.albumTitle}</dd>
                    <dt className="sr-only">Artist</dt>
                    <dd className="mt-3">
                        <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            {track.authors}
                        </span>
                    </dd>
                </dl>
            </div>
            <TrackPlayerButtons trackId={track.id}/>
        </li>
    )
}

TrackListItem.propTypes = {
    track: PropTypes.shape({
        id: PropTypes.string.isRequired,
        albumTitle: PropTypes.string.isRequired,
        albumCoverImage: PropTypes.string.isRequired,
        authors: PropTypes.string.isRequired
    }),
}

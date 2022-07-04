import Head from 'next/head'
import axios from 'axios'
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTracks, updateTrackOrder} from "../store/tracks";
import {TrackList} from "../components/tracks/List";
import {TrackFooter} from "../components/tracks/Footer";

export default function Home(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTracks(props.tracks))
  }, [])

  const onSortEnd = useCallback((oldIndex, newIndex) => {
    dispatch(updateTrackOrder({oldIndex, newIndex}))
  }, [])

  return (
      <div className="bg-gray-50">
        <Head>
          <title>Media Player Test</title>
          <meta name="description" content="A Media player test for TripAbrood"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className="flex-1 overflow-auto pb-36 px-8 pt-8">
          <TrackList />
        </main>

        <TrackFooter />
      </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('https://d2dmhurcm7ukg1.cloudfront.net/static/sample-data/tracks.json')

  return {
    props: {
      tracks: response.data
    }
  }
}

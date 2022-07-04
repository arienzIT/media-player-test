# Media player test

## Requirements
This project is part of a test with following user stories:
As a user, I want to be able to...
- [x] View the list of songs (title, artist, duration, etc..)
- [x] Remove songs from the list
- [x] Reorder songs in the list
- [x] Play a song (do NOT implement any audio - we are interested in how you deal with state)
- [x] Pause the current song
- [x] Play next / previous from the list
- [x] See details of the current song (title, artist, duration, etc..)
- [x] Display a progress bar that moves in real time based on a duration

## Tech stack
- [Next.js](https://nextjs.org/) with SSR: it has been chosen for two reasons: 
    
    - It's the company main technology
    - The API provided is not configured for CORS, therefore trying to make the API call from the client gives a cross-origin error
- [Redux toolkit](https://redux-toolkit.js.org/) for the state management
- [Jest](https://jestjs.io/) and [React testing library](https://testing-library.com/) for unit and integration tests respectively
- [TailwindCSS](https://tailwindcss.com/) and [TailwindUI](https://tailwindui.com/) for styling

## Getting Started
### Run the project
Clone the project, `cd` into the folder and install dependencies

```bash
yarn install
```

Then run the project through
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run tests
```bash
yarn test

# or watch
yarn test --watch
```

## Improvements
For the sake of the test I did omit to implement some improvements/optimizations. These would be valuable to grant a top-notch user experience of a real-world application

- [] Implement *virtual scrolling* for track list. Needs to verify if intersection observer works with [react-easy-sort](https://github.com/ValentinH/react-easy-sort).
- [] Abstract `components/tracks/Footer` in order to make it reusable from other pages
- [] Add [next-connect-redux](https://github.com/huzidaha/next-connect-redux) to keep the application state while navigating through SSR pages
- [x] ~~Show/Hide `TrackFooter` dynamically based on state `activeId`: it would be nice to animate it in/out from the bottom~~
- [x] ~~Add validation to `playNextTrack` and `playPreviousTrack` in order to disable the arrows for the last and first `TrackListItem` respectively~~
- [x] ~~Play next track when track finishes (Use `tracks/Progress` component to dispatch the event)~~



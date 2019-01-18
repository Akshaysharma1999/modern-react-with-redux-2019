import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Main Title', duration: '1:51' },
    { title: 'Blood of My Blood', duration: '3:35' },
    { title: 'Light of the Seven', duration: '9:49' },
    { title: 'Needle', duration: '2:56' },
    { title: 'Coronation', duration: '1:46' },
    { title: 'Feed the Hounds', duration: '3:08' },
    { title: 'My Watch Has Ended', duration: '2:54' },
    { title: 'The Red Woman', duration: '3:17' },
    { title: 'Hold the Door', duration: '7:21' },
    { title: 'Khaleesi', duration: '3:05' },
    { title: 'Maester', duration: '2:52' },
    { title: 'A Painless Death', duration: '3:22' },
    { title: 'Reign', duration: '3:16' },
    { title: 'Let\'s Play a Game', duration: '5:51' },
    { title: 'Bastard', duration: '5:05' },
    { title: 'Trust Each Other', duration: '3:09' },
    { title: 'Winter Has Come', duration: '3:14' },
    { title: 'Hear Me Roar', duration: '2:16' },
    { title: 'The Winds of Winter', duration: '3:29' },
    { title: 'Lord of Light (Bonus Track)', duration: '4:16' },
    { title: 'Service of the Gods (Bonus Track)', duration: '2:48' },
    { title: 'I Need You by My Side (Bonus Track)', duration: '2:36' },
    { title: 'The Tower (Bonus Track)', duration: '2:33' },
    { title: 'Onbowed, Unbent, Unbroken (Bonus Track)', duration: '1:44' },
    { title: 'I Choose Violence (Bonus Track)', duration: '1:48' },
    { title: 'Hodor (Bonus Track)', duration: '2:24' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

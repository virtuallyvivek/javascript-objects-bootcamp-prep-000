function updatePlaylist (playlist, artistName, songTitle){
  return playlist.assign ({}, playlist, {[artistName]: songTitle})
}
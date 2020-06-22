function updatePlaylist (playlist, artistName, songTitle){
  return playlist.assign ({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
function updatePlaylist (playlist, artistName, songTitle){
  return playlist.assign ({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  return
}
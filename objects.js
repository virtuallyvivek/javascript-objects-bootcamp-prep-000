return Object.assign ({}, playlist, {[artistName]: songTitle})

function updatePlaylist (playlist, artistName, songTitle){
  var playlist = { artistName : 'songTitle'};
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
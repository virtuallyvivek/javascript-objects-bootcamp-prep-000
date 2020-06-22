function updatePlaylist (object, string, title){
  return playlist.assign ({}, object, {[string]: title})
}
// const cilentId = "dc430163dda74bfaa6d9baeea1b4577c";
// const redirectURL = "http://127.0.0.1:5500/index.html";
// const apiURL = "https:/accounts.spotify.com/authorize";
// const scope = ["user-read-email", "user-read-private",
// 'user-read-playback-state',
// 'user-modify-playback-state',
// 'user-read-currently-playing',
// 'user-read-playback-position',
// 'user-top-read',
// 'user-read-recently-played'
// ];
// window.location.href = `${apiURL}?cilent_id=${cilentId}&redirect_uri=${redirectURL}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`
// console.log(`${apiURL}?cilent_id=${cilentId}&redirect_uri=${redirectURL}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`)
// Assuming the JSON file is hosted on a server
fetch('AlbumsExport.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data
    console.log(data);
  })
  .catch(error => console.error('Error fetching JSON:', error));

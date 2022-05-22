

const authEndPoint = 'https://accounts.spotify.com/authorize'

const redirectURL = 'http://localhost:3000/'

const clientID = '69419590669d437a8f22712b35a85ded'

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((acc, item) => {
        var parts = item.split("=");
        acc[parts[0]] = decodeURIComponent(parts[1]);
  
        return acc; 
      }, {});
  };

export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

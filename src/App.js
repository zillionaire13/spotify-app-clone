import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify'
import  SpotifyWebApi  from 'spotify-web-api-js';
import Player from './Player';
import { StateBucketValue } from './stateBucket';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(false)
  const [{user}, dispatch] = StateBucketValue()

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = ''
    const _token = hash.access_token

    if(_token) {
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type:'SET_USER',
          user
        })
      })
    }
    
  }, [])

  console.log('👤', user)

  return (
    <div className="App">
      {token ? <Player/> :<Login />}
    </div>
  );
}

export default App;

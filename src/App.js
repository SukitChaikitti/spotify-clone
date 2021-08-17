import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import React , { useContext, useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayer } from './Datalayer';

const spotify = new SpotifyWebApi();

function App() {

  
  const [ { user , token } , dispatch ] = useDataLayer();


  useEffect(() => {
    
    const hash = getTokenFromUrl();
    window.location.hash = '';
    
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      
    }

    spotify.getUserPlaylists().then(playlist => {
      dispatch({
        type: 'SET_PLAYLIST',
        playlist : playlist,
      })
    })

    spotify.getPlaylist('6PA4G8uT5DXUkLNsUoKrSQ').then((respone) => {
      dispatch({
        type: 'SET_DISCOVERY_WEEKLY',
        discovery_weekly: respone
      })
    })
  }, [])

  console.log(token);
  console.log(user);
  

  return (
    <div className="app">
      {token && <Player/>}
      {!token && <Login/>}
    </div>
  );
}

export default App;

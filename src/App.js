import './App.css';


import React, { useEffect } from 'react'
import Login from './components/Login';
import { getToken } from './services/spotify';
import { useState } from 'react'; 
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player';
import { useDatalayerValue } from './context/DataLayer';


const spotify = new SpotifyWebApi();

const App = () => {
  

  const [{user, token}, dispatch] = useDatalayerValue()


  useEffect(()=>{

  const hash = getToken()
  window.location.hash =''
  const _token = hash.access_token

  if (_token) {

     dispatch({
      type:'SET_TOKEN',
      token:_token
      
     })

    

    spotify.setAccessToken(_token)

    spotify.getMe().then(user => {
      
     
      dispatch({
        type:'SET_USER',
        user:user
      })
  
    })

    spotify.getUserPlaylists().then((playlists) => {

      console.log(playlists)
      dispatch({
        type:'SET_PLAYLIST',
        playlists:playlists
      })
    })

    spotify.getPlaylist('57iHwM4WtoIf6eQ73Gbmwj').then((response) => {
      dispatch({
        type:'SET_DISCOVER',
        discover_weekly:response,
      })

    })

  }


  

  },[])

  

  return (
    <div className='bg-black flex'>
      {
        token?<Player spotify={spotify}/>:<Login/>
      }
    </div>
  )
}

export default App


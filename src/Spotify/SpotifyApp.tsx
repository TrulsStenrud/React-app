import React, { Component, useEffect, useState } from 'react';
import logo from "../logo.svg";
import {useLocation, useHistory} from "react-router-dom";
import { authUri } from '../api/useApi';




const SpotifyApp = () => {
  

  useEffect(() => {
    document.title = "Spotify"
    })

    
  const [code, setCode] = useState('')
  const location = useLocation();
  const history = useHistory()
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)

    if (queryParams.has('code')) {
      setCode(String(queryParams.get('code')))
      // the code is probably not secret 
      // queryParams.delete('code')
      // history.replace({
      //   search: queryParams.toString(),
      // })
    }
  }, [])
  
  
  console.log(code)
  return (
    <div className="SpotifyApp">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        {!code && <a
          className="btn btn--loginApp-link"
          href={authUri}
        >
          Login to Spotify
        </a>}
        {code && 
          <>Logged in :D </>
        }
      
      
      </header>
    </div>
  );
  }



export default SpotifyApp;
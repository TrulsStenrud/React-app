import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react'

import { useLocation } from "react-router-dom";
import { authUri } from '../api/useApi';
import SpotifyComponent, { AccessToken } from './SpotifyComponent';


const SpotifyApp = () => {
  

  useEffect(() => {
    document.title = "Spotify"
    })


    
  // const [code, setCode] = useState('')
  const [hash, setHash] = useState({})
  const location = useLocation();
  // const history = useHistory()
  
  useEffect(() => {
    
    // console.log(location.hash)
    const searchParams = new URLSearchParams(location.search)
    
    if (location.hash) {
      setHash(window.location.hash
        .substring(1)
        .split("&")
        .reduce(function(initial:any, item) {
          if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
        }, []))


      // the code is probably not secret 
      // queryParams.delete('code')
      // history.replace({
      //   search: queryParams.toString(),
      // })
    }
    else if(searchParams.has('code'))
    {
      // setCode(String(searchParams.get('code')))
    }
    else{
      console.log("Redirecting to spotify auth")
      //TODO history stuff
      window.location.assign(authUri);
    }
  }, [location.hash, location.search])
  
  // console.log(window.location)
  // const ip = '192.168.1.55'
  const url = window.location.href//.replace('localhost', ip)

  const size = 200

  return (
    <div className="SpotifyApp">
      <header className="App-header">
      <QRCode style={{width: size, height: size}} size={512} value={url} />
        {!('access_token' in  hash) && <a
          className="btn btn--loginApp-link"
          href={authUri}
        >
          Login to Spotify
        </a>}
        {'access_token' in  hash && 
          <SpotifyComponent token={hash as AccessToken} />
        }
      
      
      </header>
    </div>
  );
  }



export default SpotifyApp;
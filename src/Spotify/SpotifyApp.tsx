import QRCode from "qrcode.react";
import React, { useEffect } from "react";
import { CLIENT_ID } from "../api/useApi";
import { useSpotify } from "../react-spotify-hook/spotifyHook";
import SpotifyComponent from "./SpotifyComponent";

const SpotifyApp = () => {
  useEffect(() => {
    document.title = "Spotify";
  });

  const url = window.location.href; //.replace('localhost', ip)

  const size = 200;

  return (
    <div className="SpotifyApp">
      <header className="App-header">
        <QRCode style={{ width: size, height: size }} size={512} value={url} />
        <SpotifyComponent />
      </header>
    </div>
  );
};

export default SpotifyApp;

import { CircularProgress, LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

import {
  apiSearch,
  apiNext,
  apiPrevious,
  apiQueueTrack,
  CLIENT_ID,
} from "../api/useApi";
import { VBox, HBox, Container } from "../LayoutStyles";
import { useSpotify } from "../react-spotify-hook/spotifyHook";
import SongBtn from "./SongBtn/SongtBtn";

export type AccessToken = {
  access_token: string;
  token_type: string;
  expires_in: string;
};

type SpotifyComponentsProps = {};

const SpotifyComponent: React.FC<SpotifyComponentsProps> = () => {
  // const fetchData = useGet("https://api.spotify.com/v1/me/player", token.access_token)

  const {
    currentPlaybakcState,
    playSong,
    pauseSong,
    nextSong,
    prevSong,
    searchSong,
    queueSong,
    currentSong,
    playbackState,
  } = useSpotify(CLIENT_ID);

  const [list, setList] = useState<any>({});
  const [searchText, setSearchText] = useState<string>("");
  const [status, setStatus] = useState("");
  const [state, setState] = useState({});

  const changeHandler = (event: any) => {
    setSearchText(event.target.value);
  };
  const search = () => {
    searchSong(searchText).then((result) => {
      console.log(result);
      setList(result);
    });
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const next = () => {
    setStatus("Loading");
    nextSong().then(() => setStatus(""));
  };
  const previous = () => {
    setStatus("Loading");
    prevSong().then(() => setStatus(""));
  };
  const queue = (id: string) => {
    setStatus("Loading");
    queueSong(id).then(() => setStatus(""));
  };

  const play = () => {
    setStatus("Loading");
    playSong().then(() => setStatus(""));
  };

  const pause = () => {
    setStatus("Loading");
    pauseSong().then(() => setStatus(""));
  };

  const curretnState = () => {
    setStatus("Loading");
    currentPlaybakcState().then((result) => {
      console.log(result.device);
      setStatus("");
    });
  };

  return (
    <VBox>
      <>{status}</>

      <HBox>
        <>{playbackState?.is_playing ? "Playing" : "Is not playing"}</>
      </HBox>
      <HBox>
        <>
          {playbackState && (
            <Container>
              <LinearProgress
                variant="determinate"
                value={
                  (100 * playbackState.progress_ms) /
                  playbackState.item.duration_ms
                }
              />
            </Container>
          )}
        </>
      </HBox>
      <HBox>
        <button onClick={curretnState}>Now?</button>
      </HBox>
      <HBox>
        <button onClick={previous}>Previous</button>
        <button onClick={pause}>pause</button>
        <button onClick={play}>Play</button>
        <button onClick={next}>Next</button>
      </HBox>
      <HBox>
        <input
          value={searchText}
          onChange={changeHandler}
          onKeyDown={handleKeyDown}
        />
        <button onClick={search}>Search</button>
      </HBox>
      {list.tracks &&
        list.tracks.items.map((item: any, index: any) => (
          <SongBtn key={index} track={item} queueSong={queue}></SongBtn>
        ))}
    </VBox>
  );
};

export default SpotifyComponent;

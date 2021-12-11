import React, { useState } from "react";

import {
  apiSearch,
  apiNext,
  apiPrevious,
  apiQueueTrack,
  CLIENT_ID,
} from "../api/useApi";
import { VBox, HBox } from "../LayoutStyles";
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

  const { nextSong, prevSong, searchSong, queueSong, token } =
    useSpotify(CLIENT_ID);

  const [list, setList] = useState<any>({});
  const [searchText, setSearchText] = useState<string>("");
  const [status, setStatus] = useState("");

  const changeHandler = (event: any) => {
    setSearchText(event.target.value);
  };
  const search = () => {
    searchSong(searchText).then((result) => setList(result));
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const useNext = () => {
    setStatus("Loading");
    nextSong().then(() => setStatus(""));
  };
  const usePrevious = () => {
    setStatus("Loading");
    prevSong().then(() => setStatus(""));
  };
  const useQueueSong = (id: string) => {
    setStatus("Loading");
    queueSong(id).then(() => setStatus(""));
  };

  // TOTO remove, just for looking at SongBtn
  // useEffect(() => {
  //     apiSearch("sex", token.access_token, setList)
  // },[])

  return (
    <VBox>
      <>{status}</>
      <HBox>
        <button onClick={usePrevious}>Previous</button>
        <button onClick={useNext}>Next</button>
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
          <SongBtn key={index} track={item} queueSong={useQueueSong}></SongBtn>
        ))}
    </VBox>
  );
};

export default SpotifyComponent;

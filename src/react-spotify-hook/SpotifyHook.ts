import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { preview } from "vite";
import { PlaybackState } from "../apiTypes/PlaybackStateResponse";
import { AccessToken } from "../Spotify/SpotifyComponent";

// Hope it never gets sorted by linter
const baseApi = "https://api.spotify.com/v1/";
const urlPlayer = baseApi + "me/player";
const urlSearch = baseApi + "search";
const urlAuth = "https://accounts.spotify.com/authorize";

const scopes =
  "user-read-currently-playing user-read-playback-state streaming user-modify-playback-state";

export const authUri = (clientId: string, redirect: string) =>
  urlAuth +
  "?response_type=token" +
  "&client_id=" +
  clientId +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent(redirect);

export const useSpotify = (clientId: string) => {
  const [hash, setHash] = useState();
  const location = useLocation();

  const [playbackState, setPlaybackState] = useState<PlaybackState>();

  useEffect(() => {
    if (location.hash) {
      setHash(
        window.location.hash
          .substring(1)
          .split("&")
          .reduce(function (initial: any, item) {
            if (item) {
              var parts = item.split("=");
              initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
          }, [])
      );
    } else {
      window.location.assign(authUri(clientId, window.location.href));
    }
  }, [location.hash, clientId]);

  const token = hash as unknown as AccessToken;

  useEffect(() => {
    if (token?.access_token) {
      const interval = setInterval(() => {
        apiCurrentState(token.access_token).then((res) =>
          setPlaybackState(res)
        );
      }, 5000);

      const playingInterval = setInterval(() => {
        setPlaybackState((prev) =>
          prev?.is_playing
            ? {
                ...prev,
                progress_ms: prev.progress_ms + 1000,
              }
            : prev
        );
      }, 1000);

      return () => {
        clearInterval(interval);
        clearInterval(playingInterval);
      };
    }
  }, [token]);

  return {
    currentPlaybakcState: () => apiCurrentState(token.access_token),
    nextSong: () => apiNext(token.access_token),
    prevSong: () => apiPrevious(token.access_token),
    searchSong: (query: string) => apiSearch(query, token.access_token),
    queueSong: (id: string) => apiQueueTrack(id, token.access_token),
    pauseSong: () => apiPause(token.access_token),
    playSong: () => apiPlay(token.access_token),
    currentSong: () => apiCurrentSong(token.access_token),
    playbackState,
    token,
  };
};

const get = (uri: string, token: string) =>
  fetch(uri, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

const post = (uri: string, token: string) =>
  fetch(uri, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

const put = (uri: string, token: string) =>
  fetch(uri, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

function apiNext(token: string) {
  const uri = urlPlayer + "/next";
  return post(uri, token);
}

function apiPrevious(token: string) {
  const uri = urlPlayer + "/previous";
  return post(uri, token);
}

function apiPause(token: string) {
  const uri = urlPlayer + "/pause";
  return put(uri, token);
}

function apiPlay(token: string) {
  const uri = urlPlayer + "/play";
  return put(uri, token);
}

function apiCurrentState(token: string): Promise<PlaybackStateResponse> {
  const uri = urlPlayer + "?market=ES";
  return get(uri, token).then((res) => res.json());
}

function apiCurrentSong(token: string) {
  const uri = urlPlayer + "/currently-playing";
  return fetch(uri, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((res) => {
    console.log(res);
    return res.json();
  });
}

function apiQueueTrack(id: string, token: string) {
  const uri = urlPlayer + "/queue?uri=" + id;
  return post(uri, token);
}

export function apiSearch(text: string, token: string) {
  const type = "track";
  const market = "NO";
  const limit = 10; // might adjust

  const uri =
    urlSearch +
    "?q=" +
    encodeURIComponent(text) +
    "&type=" +
    type +
    "&market=" +
    market +
    "&limit=" +
    limit;

  return get(uri, token).then((res) => res.json());
}

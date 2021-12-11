import { useEffect, useState } from "react";
import { useLocation } from "react-router";
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
      // console.log(location);
      window.location.assign(authUri(clientId, location.pathname));
    }
  }, [location.hash, location.search, location.pathname, clientId]);

  const token = hash as unknown as AccessToken;

  return {
    nextSong: () => apiNext(token.access_token),
    prevSong: () => apiPrevious(token.access_token),
    searchSong: (query: string) => apiSearch(query, token.access_token),
    queueSong: (id: string) => apiQueueTrack(id, token.access_token),
    token,
  };
};

const post = (uri: string, token: string) =>
  fetch(uri, {
    method: "POST",
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

  return fetch(uri, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
}

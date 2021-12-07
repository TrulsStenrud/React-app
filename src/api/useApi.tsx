import { useState, useEffect } from "react";;

type FetchData = {
  isLoaded: boolean;
  error: any;
  data: any;
};

// Hope it never gets sorted by linter
const baseApi = "https://api.spotify.com/v1/";
const urlPlayer = baseApi + "me/player";
const urlSearch = baseApi + "search";
const urlAuth = "https://accounts.spotify.com/authorize";
const urlRedirect = window.location.origin + "/spotify";

export function apiSearch(text: string, token: string, setResult: any) {
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

  fetch(uri, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log("received data", result);
        setResult(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("received error", error);
      }
    );
}

export function useGet(url: string, token: string): FetchData {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("received data", result);
          setIsLoaded(true);
          setData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("received error", error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url, token]);

  return { isLoaded, error, data };
}

export function usePost(url: string, token: string): FetchData {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log("received data", result);
        setIsLoaded(true);
        setData(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("received error", error);
        setIsLoaded(true);
        setError(error);
      }
    );

  return { isLoaded, error, data };
}

const scopes =
  "user-read-currently-playing user-read-playback-state streaming user-modify-playback-state";
const clientId = String(import.meta.env.REACT_APP_SPOTIFY_CLIENT_ID);
// const clientId = String(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

export const authUri =
  urlAuth +
  "?response_type=token" +
  "&client_id=" +
  clientId +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent(urlRedirect);

export const getTokenCodeUri =
  urlAuth +
  "?response_type=code" +
  "&client_id=" +
  clientId +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent(urlRedirect);

// export function fetchAccessToken(code:string){
//     const uri = "https://accounts.spotify.com/api/token"
//     + '?grant_type=authorization_code'
//     + '&code=' + encodeURIComponent(code)
//     + '&redirect_uri=' + encodeURIComponent(redirectUri)
// }

export function apiNext(token: string, finished: any) {
  const uri = urlPlayer + "/next";

  fetch(uri, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(
    (result) => {
      console.log("received data", result);
      finished();
    },
    (error) => {
      console.log("received error", error);
    }
  );
}

export function apiPrevious(token: string, finished: any) {
  const uri = urlPlayer + "/previous";

  post(uri, token, finished);
}

export function apiQueueTrack(id: string, token: string, finished: any) {
  const uri = urlPlayer + "/queue" + "?uri=" + id;

  post(uri, token, finished);
}

function post(uri: string, token: string, finished: any) {
  fetch(uri, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then(
    (result) => {
      console.log("received data", result);
      finished();
    },
    (error) => {
      console.log("received error", error);
    }
  );
}

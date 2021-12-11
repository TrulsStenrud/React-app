import { useState, useEffect } from "react";

type FetchData = {
  isLoaded: boolean;
  error: any;
  data: any;
};

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
export const CLIENT_ID = String(import.meta.env.REACT_APP_SPOTIFY_CLIENT_ID);
// const clientId = String(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

// export const getTokenCodeUri =
//   urlAuth +
//   "?response_type=code" +
//   "&client_id=" +
//   CLIENT_ID +
//   (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
//   "&redirect_uri=" +
//   encodeURIComponent(urlRedirect);

// export function fetchAccessToken(code:string){
//     const uri = "https://accounts.spotify.com/api/token"
//     + '?grant_type=authorization_code'
//     + '&code=' + encodeURIComponent(code)
//     + '&redirect_uri=' + encodeURIComponent(redirectUri)
// }

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

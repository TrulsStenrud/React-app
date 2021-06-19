import React, { useState, useEffect } from 'react';
// import { weatherApiKey } from './apiKeys';

type FetchData = {
    isLoaded: boolean,
    error: any,
    data: any,
}

export function useApi(url: string): FetchData {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("received data", result)
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("received error", error)
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    return { isLoaded, error, data: items }
}

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = String(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
const redirectUri = String(process.env.REACT_APP_SPOTIFY_REDIRECT_URI);
const scopes = "user-read-currently-playing user-read-playback-state";

export const authUri =
    'https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirectUri)


const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&'

export function useSpotify() {
    const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const call = "stuff"
    return useApi(call)

}
export function useWeather(city: string): FetchData {
    const weatherApiKey = "123"
    const call = `${weatherUrl}q=${city}&appid=${weatherApiKey}`
    return useApi(call)
}
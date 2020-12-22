
import React, { useState, useEffect } from 'react';
import { weatherApiKey } from './apiKeys';


type FetchData = {
    isLoaded: boolean,
    error: any,
    data: any,
}

function useApi(url: string): FetchData {
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


const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&'

export function useWeather(city: string): FetchData {
    const call = `${weatherUrl}q=${city}&appid=${weatherApiKey}`
    return useApi(call)
}
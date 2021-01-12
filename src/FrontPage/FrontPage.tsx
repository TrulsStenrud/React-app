import { useWeather } from '../api/useApi'
import './FrontPage.css'
import React, { useState } from 'react'
import rain from '../icons/rain.png';
import storm from '../icons/storm.png';
import cloud from '../icons/cloudy.png';
import sunny from '../icons/sunny.png';
import snow from '../icons/snow.png';
import cloudSun from '../icons/cloud-sun.png';


type RawData = {
    city: RawCity,
    cnt: number,
    cod: number,
    list: RawReading[],
    message: number
}
type RawCity = {
    coord: { lat: number, lon: number },
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
}

type RawReading = {
    dt: number,
    dt_txt: string,
    main: { temp: number }
    weather: { description: string, main: string }[]
}

type WeatherData = {
    city: City,
    readings: Reading[]
}

type City = {
    coord: { lat: number, lon: number },
    country: string,
    name: string,
    population: number,
    sunrise: Date,
    sunset: Date,
    timezone: number
}

type Reading = {
    date: Date,
    temp: { current: number }
    weather: { description: string, main: string }[]
}


const FrontPage = () => {


    const fetchData = useWeather("Oslo")

    if (!fetchData.isLoaded) {
        return <>Loading...</>
    }
    if (fetchData.error) {
        return <>error</>
    }
    if (fetchData.data && fetchData.data.city) {

        const city: RawCity = fetchData.data.city
        const data: RawData = fetchData.data

        return <WeatherComponent data={processData(data)} />
    }
    return <>
        woho
    </>
}


function processData(data: RawData): WeatherData {
    return {
        city: processCity(data.city),
        readings: data.list.map(reading => processReading(reading))
    }
}

function processCity(city: RawCity): City {
    return {
        coord: city.coord,
        country: city.country,
        name: city.name,
        population: city.population,
        sunrise: new Date(city.sunrise),
        sunset: new Date(city.sunset),
        timezone: city.timezone
    }
}

function processReading(reading: RawReading): Reading {
    return {
        date: new Date(reading.dt * 1000),
        temp: { current: reading.main.temp },
        weather: reading.weather.map(weather => processWeather(weather))
    }
}

function processWeather(weather: { description: string, main: string }): { description: string, main: string } {
    return weather
}

function groupByDay(readings: Reading[]): Reading[][] {
    const map = new Map()



    readings.forEach(reading => {
        const key = new Date(
            reading.date.getFullYear(),
            reading.date.getMonth(),
            reading.date.getDate()).valueOf()

        const collection = map.get(key)

        if (collection) {
            collection.push(reading)
        } else {
            map.set(key, [reading])
        }
    })

    const result: { day: number, readings: Reading[] }[] = []

    map.forEach((value, key) => {
        result.push({ day: key, readings: value })
    })

    const sorted = result
        .sort((a, b) => a.day > b.day ? 1 : a.day == b.day ? 0 : -1)
        .map(x => x.readings)

    return sorted
}

const WeatherComponent = (props: { data: WeatherData }) => {
    const { data } = props

    const groups = groupByDay(data.readings)
    const city = data.city

    return <div>
        Weather in {city.name}
        {groups.map((readings, id) => {

            return <div key={id}>
                <DailyCard city={city} readings={readings} />
            </div>
        })}
    </div>
}

function getImg(condition: string) {
    switch (condition) {
        case "Thunderstorm":
            return storm
        case "Rain":
            return rain
        case "Snow":
            return snow
        case "Clear":
            return sunny
        case "Clouds":
            return cloud
        default:
            return cloudSun
    }
}

const DailyCard = (props: { city: City, readings: Reading[] }) => {
    const { city, readings } = props


    const [isClicked, setClicked] = useState(false)

    const state = isClicked ? "open" : "collapsed"

    const temps = readings.map(reading => reading.temp.current)
    const min = Math.round(Math.min(...temps))
    const max = Math.round(Math.max(...temps))

    const img = getImg(readings[0].weather[0].main)
    return <>
        <button className="weatherCard" onClick={() => setClicked(!isClicked)}>
            <div className="item">
                <img src={img} alt="Weather conditions" />
            </div>
            <div className="item-center">{`${min}  -  ${max} °C`}</div>
            <div className="item">{`${readings[0].date.getDate()}.`}</div>
        </button>
        <div id="detail" className={state}>
            {readings.map((reading, id) => {
            const image = getImg(reading.weather[0].main)
            return <div className="innerWeatherCard" key={id}>
                <div className="item">
                <img src={image} alt="Weather conditions" />
            </div>
            <div className="item-center">{`${Math.round(reading.temp.current)} °C`}</div>
            <div className="item">{`${readings[0].date.getDate()}.`}</div>
            </div>}
            )}
        </div>
    </>
}



export default FrontPage
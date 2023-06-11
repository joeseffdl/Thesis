"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Image from "next/image"
import { BsDropletHalf, BsHurricane } from "react-icons/bs"
import { BiTachometer } from "react-icons/bi"
import { WeatherCondition } from "./"

export default function WeatherHeader() {
  const [city, setCity] = useState("Manila")
  const [weather, setWeather] = useState({} as any)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const getWeatherData = async (e: any) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      )
      if (res?.data?.cod === 200) {
        setWeather(res.data)
        setError(false)
        setIsLoading(false)
      } else {
        throw new Error("Something went wrong in fetching weather data")
      }
    } catch (error) {
      setError(true)
      setWeather({})
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getWeatherData({ preventDefault: () => {} })
  }, [])

  return (
    <div className="w-full text-[#393E5B] h-full flex flex-col items-center bg-gradient-to-t from-[#F7F8FF] to-orange-50 drop-shadow-lg">
      <div className="h-1/2 relative w-full overflow-hidden">
        <div className="absolute h-72 w-72 bg-orange-200 rounded-full -top-10 -right-16" />
        <div className="absolute h-52 w-52 bg-[#00C6C1] rounded-full top-0 -left-5" />
        <div className="absolute h-60 w-60 bg-[#393E5B] rounded-full -top-10 transform translate-x-1/4" />
        <div className="absolute h-40 w-40 bg-[#FFF7D6] rounded-full -top-20 -left-10" />
      </div>
      <div className="w-full h-full flex flex-col items-center">
        {weather?.cod === 200 && (
          <div className="w-full px-5">
            <div className="relative flex flex-col items-center justify-center text-center font-semibold text-6xl uppercase space-y-1">
              <Image
                src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`}
                alt="Weather Icon"
                width={100}
                height={100}
              />
              <div className="flex flex-col ">
                <h3 className="capitalize text-2xl font-normal">
                  {weather.name} City, {weather.sys.country}
                </h3>
                <div>{weather.main.temp} &deg;C</div>
                <p className="text-sm tracking-widest">
                  {weather.weather[0].description}
                </p>
                <div className="mt-10 flex items-center justify-center gap-5">
                  <WeatherCondition
                    source={<BsHurricane />}
                    name="Speed"
                    condition={weather.wind.speed}
                    label="m/s"
                  />
                  <WeatherCondition
                    source={<BsDropletHalf />}
                    name="Humidity"
                    condition={weather.main.humidity}
                    label="%"
                  />
                  <WeatherCondition
                    source={<BiTachometer />}
                    name="Pressure"
                    condition={weather.main.pressure}
                    label="hPa"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col items-center justify-center gap-y-3 my-6">
          {weather?.cod === 200 && (
            <form
              onSubmit={getWeatherData}
              className="text-xs font-semibold space-x-2"
            >
              <input
                type="text"
                placeholder="Enter City Name"
                onChange={(e) => setCity(e.target.value)}
                className="p-1 h-10 text-black border border-blue-950"
              />
              <button
                type="submit"
                className={`bg-blue-950 text-white px-2 h-10  ${
                  isLoading ? "opacity-50" : ""
                } hover:scale-105 duration-75`}
                disabled={isLoading}
              >
                Search
              </button>
            </form>
          )}
          {error && (
            <div className="w-full p-5 text-red-500 bg-black">
              Something went wrong with your request. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

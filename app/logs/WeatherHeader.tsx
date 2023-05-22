"use client"

import { useState } from "react"
import axios from "axios"
import Image from "next/image"

export default function WeatherHeader() {
  const [city, setCity] = useState("")
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
      console.log(res.data)
      if (res?.data?.cod === 200) {
        setWeather(res.data)
        setIsLoading(false)
      } else {
        throw new Error("Something went wrong in fetching weather data")
      }
    } catch (error) {
      setError(error?.data?.response?.message)
      setWeather({})
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full h-1/5 flex flex-col items-center bg-slate-200 rounded-3xl">
      <div className="bg-slate-400 text-center w-1/3 rounded-b-full p-1 text-xs font-semibold">
        Today
      </div>
      <div className="w-full h-full flex border-black">
        {weather?.cod === 200 && (
          <div className="w-2/5 flex items-center justify-center">
            <Image
              src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`}
              alt="Weather Icon"
              width={100}
              height={70}
            />
          </div>
        )}
        <div className="w-3/5 flex flex-col items-center justify-center gap-y-3 divide-y divide-slate-500 py-5">
          <div className="font-bold text-6xl text-white">
            23<span className="text-slate-500 text-4xl">/13</span>
          </div>
          <div className="text-xs font-semibold">Lorem ipsum dolor</div>
          <form onSubmit={getWeatherData}>
            <input
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

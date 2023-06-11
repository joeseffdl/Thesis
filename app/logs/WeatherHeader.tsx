"use client"

import { useState } from "react"
import axios from "axios"
import Image from "next/image"
import { BsDropletHalf, BsHurricane } from "react-icons/bs"
import { BiTachometer } from "react-icons/bi"
import { WeatherCondition } from "./"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-hot-toast"

export default function WeatherHeader() {
  const [city, setCity] = useState("Manila")
  
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      )
      return data
    }
  })

  if (error) toast.error("Error fetching weather data on " + city + " City") 

  return (
    <div className="w-full text-[#393E5B] h-full flex flex-col items-center bg-gradient-to-t from-[#F7F8FF] to-orange-50 drop-shadow-lg">
      <div className="h-1/2 relative w-full overflow-hidden">
        <div className="absolute h-72 w-72 bg-orange-200 rounded-full -top-10 -right-16" />
        <div className="absolute h-52 w-52 bg-[#00C6C1] rounded-full top-0 -left-5" />
        <div className="absolute h-60 w-60 bg-[#393E5B] rounded-full -top-10 transform translate-x-1/4" />
        <div className="absolute h-40 w-40 bg-[#FFF7D6] rounded-full -top-20 -left-10" />
      </div>
      <div className="w-full h-full flex flex-col items-center">
        {data?.cod === 200 && (
          <div className="w-full px-5">
            <div className="relative flex flex-col items-center justify-center text-center font-semibold text-6xl uppercase space-y-1">
              <Image
                src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
                alt="Weather Icon"
                width={100}
                height={100}
              />
              <div className="flex flex-col ">
                <h3 className="capitalize text-2xl font-normal">
                  {data.name} City, {data.sys.country}
                </h3>
                <div>{data.main.temp} &deg;C</div>
                <p className="text-sm tracking-widest">
                  {data.weather[0].description}
                </p>
                <div className="mt-10 flex items-center justify-center gap-5">
                  <WeatherCondition
                    source={<BsHurricane />}
                    name="Speed"
                    condition={data.wind.speed}
                    label="m/s"
                  />
                  <WeatherCondition
                    source={<BsDropletHalf />}
                    name="Humidity"
                    condition={data.main.humidity}
                    label="%"
                  />
                  <WeatherCondition
                    source={<BiTachometer />}
                    name="Pressure"
                    condition={data.main.pressure}
                    label="hPa"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col items-center justify-center gap-y-3 my-6">
          {!isLoading && (
            <form
              onSubmit={(e) => { e.preventDefault() }}
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
                onClick={() => refetch()}
              >
                Search
              </button>
            </form>
          )}
          {isLoading && (
            <div className="w-full p-5 text-white bg-black">Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

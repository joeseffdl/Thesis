"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { BsDropletHalf, BsHurricane } from "react-icons/bs"
import { BiTachometer } from "react-icons/bi"
import { WeatherCondition } from "./"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { useAnimate, usePresence } from "framer-motion"

export default function WeatherHeader() {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
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

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate('div', { opacity: [0, 1] }, { duration: 0.5, delay: 0.2 })
      }
      enterAnimation()
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: [1, 0] }, { duration: 0.5, delay: 0.2 })
        safeToRemove()
      }
      exitAnimation()
    }
  }, [isPresent])

  return (
    <div className="w-full text-[#393E5B] h-full flex flex-col items-center bg-gradient-to-t from-[#F7F8FF] to-orange-50 drop-shadow-lg">
      <div className="h-1/2 relative w-full overflow-hidden">
        <div className="absolute h-72 w-72 bg-orange-200 rounded-full -top-10 -right-16" />
        <div className="absolute h-52 w-52 bg-[#00C6C1] rounded-full top-0 -left-5" />
        <div className="absolute h-60 w-60 bg-[#393E5B] rounded-full -top-10 transform translate-x-1/4" />
        <div className="absolute h-40 w-40 bg-[#FFF7D6] rounded-full -top-20 -left-10" />
      </div>
      <div ref={scope} className="w-full h-full flex flex-col items-center">
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
                <div className="capitalize text-2xl font-normal">
                  {data.name} City, {data.sys.country}
                </div>
                <div>{data.main.temp} &deg;C</div>
                <div className="text-sm tracking-widest">
                  {data.weather[0].description}
                </div>
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
              onSubmit={(e) => {
                e.preventDefault()
              }}
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
            <div className="w-full">
              <div className="p-5 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

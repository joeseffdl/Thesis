"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { BsDropletHalf, BsHurricane } from "react-icons/bs";
import { BiTachometer } from "react-icons/bi";
import { WeatherCondition } from "./";

export default function WeatherHeader() {
  const [city, setCity] = useState("Manila");
  const [weather, setWeather] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeatherData = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );
      if (res?.data?.cod === 200) {
        setWeather(res.data);
        setError(false);
        setIsLoading(false);
      } else {
        throw new Error("Something went wrong in fetching weather data");
      }
    } catch (error) {
      setError(true);
      setWeather({});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData({ preventDefault: () => {} });
  }, [city]);

  return (
    <div className="w-full text-white h-full flex flex-col items-center bg-gradient-to-br from-slate-100 via-sky-700 to-sky-500">
      <div className="bg-black text-center w-1/3 rounded-b-full p-1 text-xs font-semibold">
        Today
      </div>
      <div className="w-full h-full flex flex-col items-center  border-black mt-5 ">
        <div className="w-full flex flex-col items-center justify-center gap-y-3">
          <form
            onSubmit={getWeatherData}
            className="text-xs font-semibold space-x-2"
          >
            <input
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
              className="p-1 h-10 text-black"
            />
            <button
              type="submit"
              className={`bg-black px-2 h-10 ${
                isLoading ? "opacity-50" : ""
              } hover:scale-105 duration-150`}
              disabled={isLoading}
            >
              Search
            </button>
          </form>
          {weather?.cod === 200 && (
            <div className="w-full px-5">
              <div className="flex flex-col items-center justify-center text-center font-semibold text-6xl uppercase space-y-1">
                <Image
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`}
                  alt="Weather Icon"
                  width={100}
                  height={0}
                  className="w-1/2"
                />
                <div className="flex flex-col ">
                  <div>{weather.main.temp} &deg;C</div>
                  <h3 className="capitalize text-2xl font-normal">
                    {weather.name} City, {weather.sys.country}
                  </h3>
                  <p className="text-sm tracking-widest">
                    {weather.weather[0].description}
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-5">
                    <WeatherCondition
                      source={<BsHurricane />}
                      name="Wind Speed"
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
          {error && (
            <div className="w-full p-5 text-red-500 bg-black">
              Something went wrong with your request. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client"

import { useState, useEffect, useContext } from "react"
import { MainCard, CoordinatesCard } from "./"
import { DataContext } from "@/utils/context"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("./location/Map"), { ssr: false })

export default function MainContent() {
  const { firebaseData } = useContext(DataContext)
  const [description, setDescription] = useState(
    "This is a long description that will cause a layout shift if it is not optimized."
  )

  useEffect(() => {
    setDescription(description.substring(0, 100) + "...")
  }, [description])

  return (
    <>
      <section className="w-full">
        {/* <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-3/5">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Statistics</h2>
              <p className="text-sm text-slate-500">
                tasks created vs tasks completed
              </p>
              <div>
                <div className="min-h-20 h-36 border-2 flex items-center justify-center">
                  Graph
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-sm font-semibold">created</p>
                  <p className="text-sm font-semibold">completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="border-2 rounded-lg p-5 flex flex-col gap-2">
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-around items-center font-semibold">
                  <div>{"<"}</div>
                  <h3>Jan 1 - Dec 30</h3>
                  <div>{">"}</div>
                </div>
                <div className="text-xs">view all</div>
              </div>
              <div className="border flex flex-col justify-center items-center p-2 rounded-full">
                <div className="font-semibold text-xl">80%</div>
                <div className="text-xs">completed</div>
              </div>
              <div>
                <p className="text-sm font-semibold text-center">
                  You're doing good!
                </p>
                <p className="text-sm text-slate-500 text-center">
                  You almost reached your goal.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-xl">Worker Coordinates</h2>
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {firebaseData.map((data) => {
              return (
                <CoordinatesCard
                  key={data.id}
                  id={data.id}
                  name={data.name || "No name"}
                  latitude={data.latitude || 0}
                  longitude={data.longitude || 0}
                  altitude={data.altitude || 0}
                  status={data.status || "normal"}
                />
              )
            })}
            {firebaseData.length === 0 && (
              <CoordinatesCard
                id="1"
                name="Fetching data..."
                latitude={0}
                longitude={0}
                altitude={0}
                status="normal"
              />
            )}
          </ul>
        </div>
      </section>
      <section className="w-full">
        {firebaseData.length === 0 && (
          <div
            role="status"
            className="space-y-8 md:space-y-0 md:flex md:items-center justify-center w-full h-full"
          >
            <div className="p-5 flex items-center justify-center h-full w-full bg-gray-300 dark:bg-gray-700">
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

            <span className="sr-only">Loading...</span>
          </div>
        )}
        {firebaseData && <DynamicMap />}
      </section>
    </>
  )
}

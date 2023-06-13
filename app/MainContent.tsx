"use client"

import { useState, useEffect, useContext } from "react"
import { MainCard, CoordinatesCard } from "./"
import { DataContext } from "@/utils/context"

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
      <section className="w-full"></section>
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
    </>
  )
}

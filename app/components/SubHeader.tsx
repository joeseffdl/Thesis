"use client"

import Link from "next/link"
import { ref, onValue, update } from "firebase/database"
import { db } from "../../utils/firebase"
import { useState, useEffect, useMemo } from "react"

type SubSectionProps = {
  title: string
  value: number
  suffix?: string
}

type SubHeaderProps = {
  id: string
  loggedTimeIn?: number
  name?: string
  role?: string
  scheduledTimeOut?: number
  notified: boolean
  status: string
}

function SubSection({ title, value, suffix }: SubSectionProps) {
  return (
    <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full hover:text-white hover:bg-blue-950 duration-75">
      <h3 className="text-lg">{title}</h3>
      <h2 className="text-3xl flex items-center gap-1">
        {value} <span className="text-sm">{suffix}</span>
      </h2>
    </div>
  )
}

export default function SubHeader() {
  const [subHeaderData, setSubHeaderData] = useState([])
  const [accidents, setAccidents] = useState(0)
  const [warnings, setWarnings] = useState(0)
  const [workers, setWorkers] = useState(0)
  const [notifiedWorkers, setNotifiedWorkers] = useState(0)

  function getAccidents() {
    const accidents = Object.values(subHeaderData).filter(
      (data: SubHeaderProps) => data.status === "danger"
    )
    setAccidents(accidents.length)
  }

  function getWarnings() {
    const warnings = Object.values(subHeaderData).filter(
      (data: SubHeaderProps) => data.status === "warning"
    )
    setWarnings(warnings.length)
  }

  function getNotifiedWorkers() {
    const notifiedWorkers = Object.values(subHeaderData).filter(
      (data: SubHeaderProps) => data.notified === true
    )
    setNotifiedWorkers(notifiedWorkers.length)
  }

  useEffect(() => {
    const subHeaderRef = ref(db, "timelogs")
    onValue(subHeaderRef, (snapshot) => {
      const data = snapshot.val()
      if (data !== null) {
        const subHeaderArray = Object.values(data)
        setSubHeaderData(subHeaderArray as any)
      }
    })
  }, [])
  
  useEffect(() => {
    setWorkers(subHeaderData.length)
    getAccidents()
    getWarnings()
    getNotifiedWorkers()
  }, [subHeaderData])

  return (
    <section className="flex flex-col justify-between lg:flex-row gap-4 mt-4 font-semibold">
      <Link href="/logs" className="w-full hover:bg-blue-950 ">
        <SubSection title="Current Attendance" value={workers} suffix="workers" />
      </Link>
      <Link href="/workers" className="w-full hover:bg-blue-950 ">
        <SubSection title="Detected" value={warnings} suffix="warnings" />
      </Link>
      <Link href="/location" className="w-full hover:bg-blue-950 ">
        <SubSection title="Detected" value={accidents} suffix="accidents" />
      </Link>
      <Link href="/workers" className="w-full hover:bg-blue-950 ">
        <SubSection title="Notified" value={notifiedWorkers} suffix="workers" />
      </Link>
    </section>
  )
}

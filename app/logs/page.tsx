"use client"

import { Header, LogsSubHeader } from "../components"
import { TimelogsList, WeatherHeader } from "./"
import { ref, update } from "firebase/database"
import { db } from "../../utils/firebase"
import { useState, useEffect, useMemo, useContext } from "react"
import { DataContext } from "@/utils/context"
import NotifySupervisor from "../../utils/NotifySupervisor"
import { useAnimate, usePresence, stagger } from "framer-motion"

export default function Logs() {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()

  const {
    firebaseData,
    accidents,
    warnings,
    notifiedWorkers,
    emergencies,
    currentlyWorn,
  } = useContext(DataContext)
  const [notify, setNotify] = useState(false)
  const [tempID, setTempID] = useState("")
  const [_accidents, _setAccidents] = useState(accidents)
  const [_warnings, _setWarnings] = useState(warnings)
  const [_notifiedWorkers, _setNotifiedWorkers] = useState(notifiedWorkers)
  const [_emergencies, _setEmergencies] = useState(emergencies)

  const notifyWorker = () => {
    update(ref(db, `timelogs/${tempID}`), {
      notified: notify,
      id: tempID,
    })
  }

  useEffect(() => {
    if (tempID) {
      notifyWorker()
    }
  }, [notify, tempID])

  useEffect(() => {
    if (accidents !== _accidents) {
      _setAccidents(accidents)
      NotifySupervisor({ accidents })
    }
    if (warnings !== _warnings) {
      _setWarnings(warnings)
      NotifySupervisor({ warnings })
    }
    if (notifiedWorkers !== _notifiedWorkers) {
      _setNotifiedWorkers(notifiedWorkers)
      if (notifiedWorkers > _notifiedWorkers) {
        NotifySupervisor({ notifiedWorkers, position: "top-center" })
      }
    }
    if (emergencies !== _emergencies) {
      _setEmergencies(emergencies)
      NotifySupervisor({ emergencies })
    }
    NotifySupervisor({ currentlyWorn })
  }, [accidents, warnings, notifiedWorkers, emergencies, currentlyWorn])

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          "ul",
          { opacity: [0, 1] },
          { duration: 0.5, delay: stagger(0.2) }
        )
      }
      enterAnimation()
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { opacity: [1, 0] },
          { duration: 0.5, delay: stagger(0.2) }
        )
        safeToRemove()
      }
      exitAnimation()
    }
  }, [isPresent])

  const memoizedFirebaseData = useMemo(() => firebaseData, [firebaseData])

  return (
    <div ref={scope} className="w-full flex flex-col xl:flex-row">
      <section className="xl:w-3/4">
        <section className="p-8">
          <Header
            title="Timekeeping"
            subtitle="Monitor the status of your workers"
          />
        </section>
        <div
          className="
         p-8 flex flex-col gap-2"
        >
          <LogsSubHeader />
          <div className="flex justify-between items-center py-4 px-2">
            <h2 className="font-semibold text-lg">Timelogs</h2>
          </div>
          <ul className="flex flex-col gap-2">
            {memoizedFirebaseData.map((timelog) => (
              <TimelogsList
                key={timelog.id}
                timeIn={timelog.loggedTimeIn ?? 0}
                name={timelog.name ?? "Default worker"}
                id={timelog.id}
                timeOut={timelog.scheduledTimeOut ?? 9}
                status={timelog.status}
                notify={timelog.notified}
                tempID={tempID}
                setNotify={setNotify}
                setTempID={setTempID}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="hidden xl:flex flex-col items-center w-1/4">
        <WeatherHeader />
      </section>
    </div>
  )
}

"use client";

import { Header, LogsSubHeader } from "../components";
import { TimelogsList, WeatherHeader } from "./";
import { ref, onValue, update } from "firebase/database";
import { db } from "../../utils/firebase";
import { useState, useEffect, useMemo } from "react";

type TimelogProps = {
  id: string;
  loggedTimeIn: number;
  name: string;
  role: string;
  scheduledTimeOut: number;
  notified: boolean;
  status: string;
};

export default function Logs() {
  const [timelogs, setTimelogs] = useState([]);
  const [notify, setNotify] = useState(false);
  const [tempID, setTempID] = useState("");

  const notifyWorker = () => {
    update(ref(db, `timelogs/${tempID}`), {
      notified: notify,
      id: tempID,
    });
  };

  useEffect(() => {
    const timelogsRef = ref(db, "timelogs");
    onValue(timelogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const timelogsArray = Object.values(data);
        setTimelogs(timelogsArray as any);
      }
    });
  }, []);

  useEffect(() => {
    if (notify) {
      notifyWorker();
    }
  }, [notify]);

  const memoizedTimelogs = useMemo(() => timelogs, [timelogs]);

  return (
    <div className="w-full flex flex-col xl:flex-row">
      <section className="xl:w-3/4">
        <section className="p-8">
          <Header
            title="Timekeeping"
            subtitle="Monitor the status of your workers"
          />
        </section>
        <div className="bg-slate-200 p-8 flex flex-col gap-2">
          <LogsSubHeader />
          <div className="flex justify-between items-center py-4 px-2">
            <h2 className="font-semibold text-lg">Timelogs</h2>
          </div>
          <ul className="flex flex-col gap-2">
            {memoizedTimelogs.map((timelog: TimelogProps) => (
              <TimelogsList
                key={timelog.id}
                timeIn={timelog.loggedTimeIn}
                name={timelog.name}
                id={timelog.id}
                timeOut={timelog.scheduledTimeOut}
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
  );
}

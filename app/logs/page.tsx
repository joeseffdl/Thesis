"use client";

import { Header, LogsSubHeader } from "../components";
import { ListItem, WeatherHeader } from "./";
import { ref, onValue, set } from "firebase/database";
import { db } from "../../utils/firebase";
import { useState, useEffect } from "react";

type TimelogProps = {
  id: string;
  loggedTimeIn: number;
  name: string;
  role: string;
  scheduledTimeOut: number;
};

export default function Logs() {
  const [timelogs, setTimelogs] = useState([]);

  useEffect(() => {
    const timelogsRef = ref(db, "timelogs");
    onValue(timelogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((timelog) => {
          setTimelogs((prev) => [...prev, timelog] as any);
        });
      }
    });
  }, []);

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
            {/* <h4 className="text-xs">See All Logs {">"}</h4> */}
          </div>
          <ul className="flex flex-col gap-2">
            {timelogs.map((timelog: TimelogProps) => (
              <ListItem
                key={timelog.id}
                timeIn={timelog.loggedTimeIn}
                name={timelog.name}
                id={timelog.id}
                role={timelog.role}
                timeOut={timelog.scheduledTimeOut}
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

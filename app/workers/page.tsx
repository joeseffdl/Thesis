"use client";

import { WorkerCard, WorkerHeader } from "./";
import { ref, onValue } from "firebase/database";
import { db } from "../../utils/firebase";
import { useState, useEffect, useMemo } from "react";

type WorkerProps = {
  name: string;
  loggedTimeIn: string;
  scheduledTimeOut: string;
  status: string;
};

export default function Workers() {
  const [workersList, setWorkersList] = useState([]);

  useEffect(() => {
    const workersRef = ref(db, "timelogs");
    onValue(workersRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const workersArray = Object.values(data);
        setWorkersList(workersArray as any);
      }
    });
  }, []);

  const memoizedWorkersList = useMemo(() => workersList, [workersList]);

  return (
    <div className="w-full">
      <div className="p-5">
        <WorkerHeader
          timeIn="8:00 AM"
          timeOut="5:00 PM"
          completedHours={"80"}
        />
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3">
          {memoizedWorkersList.map((worker: WorkerProps) => (
            <WorkerCard
              key={worker.name}
              name={worker.name}
              timeIn={worker.loggedTimeIn}
              timeOut={worker.scheduledTimeOut}
              status={worker.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

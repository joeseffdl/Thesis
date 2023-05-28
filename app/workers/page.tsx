"use client"

import { WorkerCard, WorkerHeader } from "./";
import { ref, onValue, set } from "firebase/database";
import { db } from "../../utils/firebase";
import { useState, useEffect } from "react";

type WorkerProps = {
  name: string;
  timeIn: string;
  timeOut: string;
}

export default function Workers() {
  const [workersList, setWorkersList] = useState([]);

  useEffect(() => {
    const workersRef = ref(db, "workersList");
    onValue(workersRef, (snapshot) => {
      const data = snapshot.val();
      if(data !== null) {
        Object.values(data).map((worker) => {
          setWorkersList((prev) => [...prev, worker] as any);
        });
      }
    });
  }, []);

  return (
    <div className="w-full">
      <div className="p-5">
        <WorkerHeader />
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3">
          {workersList.map((worker:WorkerProps) => (
            <WorkerCard key={worker.name} name={worker.name} timeIn={worker.timeIn} timeOut={worker.timeOut} />
          ))}
        </div>
      </div>
    </div>
  );
}

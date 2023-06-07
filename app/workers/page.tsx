"use client";

import { WorkerCard, WorkerHeader } from "./";
import { useContext, useMemo } from "react";
import { DataContext } from "../../utils/context";

type WorkerProps = {
  name: string;
  loggedTimeIn: string;
  scheduledTimeOut: string;
  status: string;
  role?: string;
};

export default function Workers() {
  const workersList = useContext(DataContext);

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
              role={worker.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

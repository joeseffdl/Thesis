"use client";

import { WorkerCard, WorkerHeader } from "./";
import { useContext, useMemo, useEffect } from "react";
import { DataContext } from "../../utils/context";
import NotifySupervisor from "@/utils/NotifySupervisor";

export default function Workers() {
  const { firebaseData, accidents, warnings, emergencies } = useContext(DataContext);

  const memoizedWorkersList = useMemo(() => firebaseData, [firebaseData]);

  useEffect(() => {
    NotifySupervisor({ accidents, warnings, emergencies });
  }, [accidents, warnings, emergencies]);

  return (
    <div className="w-full">
      <div className="p-5">
        <WorkerHeader
          timeIn="8:00 AM"
          timeOut="5:00 PM"
          completedHours={"80"}
        />
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3">
          {memoizedWorkersList.map((worker) => (
            <WorkerCard
              key={worker.name}
              name={worker.name ?? "Default worker"}
              timeIn={worker.loggedTimeIn ?? 0}
              timeOut={worker.scheduledTimeOut ?? 9}
              status={worker.status}
              role={worker.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

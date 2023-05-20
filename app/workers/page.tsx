import { WorkerCard, WorkerHeader } from "./";

export default function Workers() {
  return (
    <div className="w-full">
      <div className="p-5">
        <WorkerHeader />
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3">
          <WorkerCard name={"Worker 1"} timeIn="9:00 AM" timeOut="5:00 PM" />
          <WorkerCard name={"Worker 2"} timeIn="9:00 AM" timeOut="5:00 PM" />
          <WorkerCard name={"Worker 3"} timeIn="9:00 AM" timeOut="5:00 PM" />
          <WorkerCard name={"Worker 4"} timeIn="9:00 AM" timeOut="5:00 PM" />
          <WorkerCard name={"Worker 5"} timeIn="9:00 AM" timeOut="5:00 PM" />
          <WorkerCard name={"Worker 6"} timeIn="9:00 AM" timeOut="5:00 PM" />
        </div>
      </div>
    </div>
  );
}

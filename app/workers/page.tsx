import { WorkerCard, WorkerHeader } from "./";

export default function Workers() {
  return (
    <div className="w-full">
      <div className="p-5">
        <WorkerHeader />
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3">
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
        </div>
      </div>
    </div>
  );
}

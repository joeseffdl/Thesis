import { Header, LogsSubHeader } from "../components";
import { ListItem, WeatherHeader } from "./";

const WorkersList = [
  {
    timeIn:"9:00 AM", name:"Worker 1", id:"TestID1", role:"Engineer", hoursRendered:45
  },
  {
    timeIn:"9:00 AM", name:"Worker 2", id:"TestID2", role:"Engineer", hoursRendered:77
  },
  {
    timeIn:"9:00 AM", name:"Worker 3", id:"TestID3", role:"Engineer", hoursRendered:88
  }
]

export default function Logs() {
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
            <h2 className="font-semibold text-lg">Tasks</h2>
            <h4 className="text-xs">See All Tasks {">"}</h4>
          </div>
          <ul className="flex flex-col gap-2">
            {WorkersList.map((worker, index) => (
              <ListItem key={index} timeIn={worker.timeIn} name={worker.name} id={worker.id} role={worker.role} hoursRendered={worker.hoursRendered} />
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

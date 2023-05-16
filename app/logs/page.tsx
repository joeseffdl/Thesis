import { Header, LogsSubHeader } from "../components";
import { ListItem, MyHome, WeatherGridItem, WeatherHeader } from "./";

export default function Logs() {
  return (
    <div className="w-full flex flex-col xl:flex-row">
      <section className="xl:w-3/4">
        <section className="p-8 ">
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
            <ListItem />
            <ListItem />
            <ListItem />
          </ul>
        </div>
      </section>

      <section className="hidden gap-2 xl:flex flex-col items-center p-5 w-1/4">
        <WeatherHeader />
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center bg-slate-200 rounded-3xl gap-2 py-3 px-8">
            <MyHome />
            <div className="p-5 gap-2 w-full h-full bg-slate-800 rounded-3xl grid grid-cols-2 border border-white ">
              <WeatherGridItem />
              <WeatherGridItem />
              <WeatherGridItem />
              <WeatherGridItem />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

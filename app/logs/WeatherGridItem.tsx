export default function WeatherGridItem() {
  return (
    <div className="border-2 h-40 border-slate-200 rounded-3xl flex flex-col gap-3 items-center justify-center">
      <div className="flex w-full justify-around items-center">
        <div className="text-sm font-semibold text-slate-300">OFF</div>
        <h6 className=" bg-white rounded-full w-4 h-4 border-2 shadow-amber-200 shadow-inner" />
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <h6 className=" bg-white rounded-full w-8 h-8 border-2 shadow-amber-200 shadow-inner" />
        <div className="text-center font-semibold text-white text-sm">
          Light
        </div>
        <div className="text-center font-semibold text-slate-300 text-[10px]">
          2hr 19min
        </div>
      </div>
    </div>
  );
}

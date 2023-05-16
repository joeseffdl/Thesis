export default function MyHome() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div>
          My <span>home</span>
        </div>
      </div>
      <div className="flex w-full rounded-3xl border-2 border-slate-500 bg-slate-800">
        <div className="flex justify-around items-center w-full rounded-3xl m-0.5 bg-green-500">
          <h6 className=" bg-white rounded-full w-8 h-8 border-2 shadow-amber-200 shadow-inner" />
          <div className="font-semibold text-white text-left w-1/2">Energy</div>
        </div>
        <div className="w-full flex flex-col text-white p-3 justify-center">
          <div className="font-semibold text-sm">15.2 kWh</div>
          <div className="text-[10px] font-semibold text-slate-300">
            2x Device turn on
          </div>
        </div>
      </div>
    </>
  )
}

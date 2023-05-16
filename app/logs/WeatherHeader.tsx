export default function WeatherHeader() {
    return (
      <div className="w-full h-1/5 flex flex-col items-center bg-slate-200 rounded-3xl">
        <div className="bg-slate-400 text-center w-1/3 rounded-b-full p-1 text-xs font-semibold">
          Today
        </div>
        <div className="w-full h-full flex border-black">
          <div className="w-2/5 flex items-center justify-center">
            <h6 className="bg-white rounded-full w-20 h-20 border-2 shadow-amber-200 shadow-inner" />
          </div>
          <div className="w-3/5 flex flex-col items-center justify-center gap-y-3 divide-y divide-slate-500 py-5">
            <div className="font-bold text-6xl text-white">
              23<span className="text-slate-500 text-4xl">/13</span>
            </div>
            <div className="text-xs font-semibold">Lorem ipsum dolor</div>
          </div>
        </div>
      </div>
    )
};

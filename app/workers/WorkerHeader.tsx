export default function WorkerHeader() {
  return (
    <>
      <div className="flex justify-between items-center my-2">
        <div className="w-8 h-8 rounded-lg border-2 border-orange-500" />
        <div className="w-10 h-10 bg-orange-200 rounded-full" />
      </div>
      <div className="">
        <p className=" text-sm font-semibold text-slate-500">Welcome back,</p>
        <h2 className="text-3xl font-semibold">
          Create a habit for <br /> the future
        </h2>
      </div>
      <div className="lg:w-4/5 p-5 flex flex-col my-10 h-40 border-2 border-orange-300 bg-orange-200">
        <h3 className="font-semibold text-lg md:text-xl">Evening Cycle</h3>
        <p className="text-[10px] font-semibold text-slate-600 md:text-sm">
          6:00 PM - 7:30 PM
        </p>
        <div className="relative h-2 w-1/2 bg-orange-300 mt-3">
          <div className="absolute h-2 top-0 left-0 bg-white w-[60%]" />
        </div>
        <div className="flex w-1/2 items-center justify-end text-xs md:text-sm mt-1 font-semibold">
          60%
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="mb-2 text-2xl font-semibold">Running habits</h2>
      </div>
    </>
  );
}

type WorkerHeaderProps = {
  timeIn: string;
  timeOut: string;
  completedHours: string;
};

export default function WorkerHeader({
  timeIn,
  timeOut,
  completedHours,
}: WorkerHeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center my-2">
        <div className="w-8 h-8 rounded-lg border-2 border-orange-500" />
      </div>
      <div className="">
        <p className=" text-sm font-semibold text-slate-500">
          Welcome back, Super Admin!
        </p>
        <h2 className="text-3xl font-semibold">
          Monitor your workers <br /> and their status
        </h2>
      </div>
      <div className="lg:w-4/5 p-5 flex flex-col my-10 h-40 border-2 border-orange-300 bg-orange-200">
        <h3 className="font-semibold text-lg md:text-xl">Work Schedule</h3>
        <p className="text-[10px] font-semibold text-slate-600 md:text-sm">
          {timeIn} - {timeOut}
        </p>
        <div className="relative h-2 w-1/2 bg-orange-300 mt-3">
          <div
            className="absolute h-2 top-0 left-0 bg-white"
            style={{ width: completedHours + "%" }}
          />
        </div>
        <div className="flex w-1/2 items-center justify-end text-xs md:text-sm mt-1 font-semibold">
          {completedHours}%
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="mb-2 text-2xl font-semibold">Workers List</h2>
      </div>
    </>
  );
}

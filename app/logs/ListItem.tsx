export default function ListItem() {
  return (
    <li className="p-4 flex flex-col lg:flex-row items-center justify-around gap-5 bg-white rounded-xl">
      <div className="flex items-center gap-2 lg:w-1/6">
        <button className=" bg-white rounded-full w-10 h-10 border-2 shadow-sky-500 shadow-inner"></button>
        <div className="flex flex-col">
          <div>Start from</div>
          <div>O 9:00 am</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-2/6">
        <div className="font-semibold text-center lg:text-left">
          Search Inspiration for Project
        </div>
        <div className="flex gap-2 text-center lg:text-left">
          <div className="text-xs font-thin w-full">www.dribbble.com</div>
          <div className="text-xs font-thin w-full">6 comments</div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full gap-2 lg:w-2/6">
        <div className="font-semibold">
          66% <span className="text-xs">complete</span>
        </div>
        <div className="relative rounded-full w-full h-2 bg-slate-300">
          <div className="absolute left-0 h-2 w-2/3 rounded-full bg-sky-300" />
        </div>
      </div>
      <div className="flex items-center justify-center lg:w-1/6">
        <button className="bg-indigo-100 text-indigo-500 rounded-lg font-semibold text-sm py-2 px-4">
          Reminder
        </button>
      </div>
    </li>
  );
}

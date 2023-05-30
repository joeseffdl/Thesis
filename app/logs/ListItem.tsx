type ListItemProps = {
  timeIn: number;
  name: string;
  id: string;
  role: string;
  timeOut: number;
};

export default function ListItem({
  timeIn,
  name,
  id,
  role,
  timeOut,
}: ListItemProps) {
  return (
    <li className="p-4 flex flex-col lg:flex-row items-center justify-around gap-5 bg-white rounded-xl">
      <div className="flex items-center gap-2 lg:w-1/6">
        <button className=" bg-white rounded-full w-10 h-10 border-2 shadow-sky-500 shadow-inner"></button>
        <div className="flex flex-col">
          <div>Logged In</div>
          <div>{timeIn}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-2/6">
        <div className="font-semibold text-center lg:text-left">{name}</div>
        <div className="flex gap-2 text-center lg:text-left">
          <div className="text-xs font-thin w-full">{id}</div>
          <div className="text-xs font-thin w-full">{role}</div>
        </div>
      </div>
      <div className={`flex flex-col justify-center h-full gap-2 w-1/3`}>
        <div className="font-semibold">
          {Math.round((timeIn / timeOut) * 100)} %{" "}
          <span className="text-xs">complete</span>
        </div>
        <div className="relative rounded-full w-full h-2 bg-slate-300">
          <div
            className="absolute left-0 h-2 rounded-full bg-sky-300"
            style={{ width: Math.round((timeIn / timeOut) * 100) + "%" }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center lg:w-1/6">
        <button className="bg-indigo-100 text-indigo-500 rounded-lg font-semibold text-sm py-2 px-4">
          Notify
        </button>
      </div>
    </li>
  );
}

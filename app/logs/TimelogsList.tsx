type TimelogListProps = {
  timeIn: number;
  name: string;
  id: string;
  timeOut: number;
  status: string;
  notify: boolean;
  tempID: string;
  setNotify: (value: boolean) => void;
  setTempID: (value: string) => void;
};

export default function TimelogList({
  timeIn,
  name,
  id,
  timeOut,
  status,
  notify,
  tempID,
  setNotify,
  setTempID,
}: TimelogListProps) {
  const handleNotify = (id: string) => {
    setTempID(id);
    setNotify(!notify);
  };

  return (
    <li
      className={`p-4 flex flex-col lg:flex-row items-center justify-around gap-5 ${
        status === "normal"
          ? "bg-green-200"
          : status === "warning"
          ? "bg-amber-200"
          : status === "danger"
          ? "bg-red-200"
          : "bg-white"
      } rounded-xl`}
    >
      <div className="flex flex-col gap-2 lg:w-1/6">
        <div className="font-semibold text-center lg:text-left">{name}</div>
        <div className="flex gap-2 text-center lg:text-left">
          <div className="text-xs font-thin w-full">ID: {id}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm lg:w-1/6">
        <div>Logged In</div>
        <div>{timeIn}</div>
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
        <button
          onClick={() => handleNotify(id)}
          className="bg-indigo-100 text-indigo-500 rounded-lg font-semibold text-sm py-2 px-4"
        >
          {notify ? "Notified" : "Notify"}
        </button>
      </div>
    </li>
  );
}

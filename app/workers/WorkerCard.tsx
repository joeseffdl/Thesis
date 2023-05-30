type WorkerCardProps = {
  name: string;
  timeIn: string;
  timeOut: string;
  status: string;
};

export default function WorkerCard({
  name,
  timeIn,
  timeOut,
  status,
}: WorkerCardProps) {
  return (
    <div
      className={`w-full h-20 p-5 ${
        status == "normal"
          ? "bg-green-200"
          : status == "warning"
          ? "bg-amber-200"
          : status == "danger"
          ? "bg-red-200"
          : "bg-green-300"
      } flex items-center justify-between`}
    >
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 bg-orange-200 rounded-full" />
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs text-slate-500">
            {timeIn} - {timeOut}
          </p>
        </div>
      </div>
      <div className="w-8 h-8 bg-orange-100 rounded-full" />
    </div>
  );
}

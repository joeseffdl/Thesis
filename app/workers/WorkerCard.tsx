type WorkerCardProps = {
  name: string;
  timeIn: string;
  timeOut: string;
  status: string;
  role?: string;
};

export default function WorkerCard({
  name,
  timeIn,
  timeOut,
  status,
  role,
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
          <div className="flex gap-2 text-xs">
            <p className="font-semibold">{role}</p>
            <p className="text-slate-500">
              Schedule: {timeIn} - {timeOut}
            </p>
          </div>
        </div>
      </div>
      <div className="w-8 h-8 bg-orange-100 rounded-full" />
    </div>
  );
}

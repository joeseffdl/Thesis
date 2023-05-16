export default function WorkerCard() {
  return (
    <div className="w-full h-20 p-5 bg-slate-300 flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 bg-orange-200 rounded-full" />
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold">Green tea cup</h3>
          <p className="text-xs text-slate-500">7:40 PM - 7:50 PM</p>
        </div>
      </div>
      <div className="w-8 h-8 bg-orange-100 rounded-full" />
    </div>
  );
}

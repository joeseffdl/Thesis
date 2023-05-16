type MainCardProps = {
  id: number
  task: string
  tag: string
  description: string
  date: string
}

export default function MainCard({
  id,
  task,
  tag,
  description,
  date,
}: MainCardProps) {
  return (
    <section className="p-5 bg-slate-900 text-white rounded-lg">
      <div className="flex flex-col">
        <p className="text-sm text-slate-500">ID {id}</p>
        <p className="font-semibold text-slate-100">{task}</p>
        <p className="mt-2 text-xs text-slate-200">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs py-1 px-2 rounded-lg bg-red-100 w-fit text-black">
          {tag}
        </div>
        <p className="text-sm text-slate-300">{date}</p>
      </div>
    </section>
  )
}

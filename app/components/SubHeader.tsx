type SubSectionProps = {
  title: string
  value: number
  suffix?: string
}

function SubSection({ title, value, suffix }: SubSectionProps) {
  return (
    <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full">
      <h3 className="text-lg">{title}</h3>
      <h2 className="text-3xl flex items-center gap-1">
        {value} <span className="text-sm">{suffix}</span>
      </h2>
    </div>
  )
}

export default function SubHeader() {
  return (
    <section className="flex flex-col justify-between lg:flex-row gap-4 mt-4 font-semibold">
      <SubSection title="Hours this week" value={40} suffix="/hrs" />
      <SubSection title="Project completed" value={69} suffix="%" />
      <SubSection title="Tasks in due" value={69} suffix="/420" />
      <SubSection title="Newly assigned tasks" value={123} />
    </section>
  )
}

import Link from "next/link";

type SubSectionProps = {
  title: string;
  value: number;
  suffix?: string;
};

function SubSection({ title, value, suffix }: SubSectionProps) {
  return (
    <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full hover:text-white hover:bg-blue-950 duration-150">
      <h3 className="text-lg">{title}</h3>
      <h2 className="text-3xl flex items-center gap-1">
        {value} <span className="text-sm">{suffix}</span>
      </h2>
    </div>
  );
}

export default function SubHeader() {
  return (
    <section className="flex flex-col justify-between lg:flex-row gap-4 mt-4 font-semibold">
      <Link href="/logs" className="w-full hover:bg-blue-950 ">
        <SubSection title="Current Attendance" value={40} suffix="workers" />
      </Link>
      <Link href="/workers" className="w-full hover:bg-blue-950 ">
        <SubSection title="Detected" value={2} suffix="accidents" />
      </Link>
      <Link href="/location" className="w-full hover:bg-blue-950 ">
        <SubSection title="Notified" value={3} suffix="workers" />
      </Link>
      <Link href="workers" className="w-full hover:bg-blue-950 ">
        <SubSection title="On break" value={1} />
      </Link>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useContext } from "react";
import { DataContext } from "@/utils/context";
import NotifySupervisor from "@/utils/NotifySupervisor";

type StatusCardProps = {
  title: string;
  value: number;
  suffix?: string;
};

function StatusCard({ title, value, suffix }: StatusCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full hover:text-white hover:bg-blue-950 duration-75">
      <h3 className="text-lg">{title}</h3>
      <h2 className="text-3xl flex items-center gap-1">
        {value} <span className="text-sm">{suffix}</span>
      </h2>
    </div>
  );
}

export default function StatusContainer() {
  const { accidents, warnings, workers, notifiedWorkers, emergencies } =
    useContext(DataContext);

  useEffect(() => {
    NotifySupervisor({ accidents, warnings, emergencies });
  }, [accidents, warnings, emergencies]);

  return (
    <section className="flex flex-col justify-between lg:flex-row gap-4 mt-4 font-semibold">
      <Link href="/logs" className="w-full hover:bg-blue-300 ">
        <StatusCard title="Active" value={workers} suffix="workers" />
      </Link>
      <Link href="/workers" className="w-full hover:bg-blue-950 ">
        <StatusCard
          title={`${warnings > 1 ? "Warnings" : "Warning"}`}
          value={warnings}
          suffix="detected"
        />
      </Link>
      <Link href="/location" className="w-full hover:bg-blue-950 ">
        <StatusCard
          title={`${accidents > 1 ? "Accidents" : "Accident"}`}
          value={accidents}
          suffix="detected"
        />
      </Link>
      <Link href="/workers" className="w-full hover:bg-blue-950 ">
        <StatusCard title="Notified" value={notifiedWorkers} suffix="workers" />
      </Link>
      <Link href="/workers" className="w-full hover:bg-blue-950 ">
        <StatusCard title="SOS" value={emergencies} suffix="in need" />
      </Link>
    </section>
  );
}

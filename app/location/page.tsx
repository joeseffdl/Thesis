import dynamic from "next/dynamic";
import { Header } from "../components";

const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

export default function Location() {
  return (
    <div className="w-full">
      <section className="flex flex-col h-full">
        <section className="p-8 bg-teal-200/50">
          <Header
            title="Location"
            subtitle="Track the location of your workers"
          ></Header>
        </section>
        <section className="flex flex-grow align-center justify-center">
          <DynamicMap />
        </section>
      </section>
    </div>
  );
}

import dynamic from "next/dynamic";
import { Header } from "../components";

const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

export default function Location() {
  return (
    <div className="w-full">
      <section className="flex flex-col h-full">
        <section className="p-8 bg-slate-400">
          <Header title="Location" subtitle="Track the location of your workers"></Header>
        </section>
        <section className="flex flex-grow align-center justify-center">
          <div className="flex justify-center align-center w-3/4 rounded-2xl my-10 p-5 bg-slate-700">
            <DynamicMap />
          </div>
        </section>
      </section>
    </div>
  );
}

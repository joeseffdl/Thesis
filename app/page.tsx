import { MainContent } from ".";
import { Header, SubHeader } from "./components";

export default function Dashboard() {
  return (
    <main className="w-full">
      <section className="bg-slate-200 p-8">
        <Header title="Dashboard" subtitle="Good Morning, User!" />
        <SubHeader />
      </section>
      <section className="p-8 flex flex-col lg:flex-row gap-5">
        <MainContent />
      </section>
    </main>
  );
}

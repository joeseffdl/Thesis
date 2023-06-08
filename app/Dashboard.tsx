import { MainContent } from ".";
import { Header, SubHeader } from "./components";

export default function Dashboard() {
  return (
    <>
      <section className="bg-slate-200 p-8">
        <Header title="Dashboard" subtitle="Greetings, Super Admin!" />
        <SubHeader />
      </section>
      <section className="p-8 flex flex-col lg:flex-row gap-5">
        <MainContent />
      </section>
    </>
  );
}

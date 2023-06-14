import { MainContent } from ".";
import { Header, StatusContainer } from "./components"

export default function Dashboard() {
  return (
    <>
      <section className="bg-teal-200/50 p-8">
        <Header title="Dashboard" subtitle="Greetings, Super Admin!" />
        <StatusContainer />
      </section>
      <section className="p-8 flex flex-col lg:flex-row gap-5 bg-orange-100 h-[calc(100%-241.6px)]">
        <MainContent />
      </section>
    </>
  )
}

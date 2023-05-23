type HeaderProps = {
  title: string;
  subtitle: string;
};
export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-4">
      <div className="flex flex-col">
        <p className="text-sm text-slate-500 font-semibold">{subtitle}</p>
        <h2 className="text-xl lg:text-3xl font-semibold">{title}</h2>
      </div>
      <div>
        <input
          type="search"
          className="flex items-center rounded-full px-2 py-1"
          placeholder="Search"
        />
      </div>
    </section>
  );
}

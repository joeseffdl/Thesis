type ProjectCardProps = {
  image: string;
  name: string;
  tasks: number;
  overdue: number;
  date: string;
  images: string[];
};

export default function ProjectCard({
  image,
  name,
  tasks,
  overdue,
  date,
  images,
}: ProjectCardProps) {
  return (
    <li className="p-5 flex items-center justify-between bg-slate-300 rounded-lg">
      <div>
        <div>{image}</div>
        <div>
          <h4>{name}</h4>
          <p>
            {tasks} tasks * {overdue} overdue
          </p>
        </div>
      </div>
      <div>
        <div>{images}</div>
        <span>{date}</span>
      </div>
    </li>
  );
}

"use client";

import { useState, useEffect } from "react";
import { MainCard, ProjectCard } from "./";

export default function MainContent() {
  const [description, setDescription] = useState(
    "This is a long description that will cause a layout shift if it is not optimized."
  );

  useEffect(() => {
    setDescription(description.substring(0, 100) + "...");
  }, [description]);

  return (
    <>
      <section className="w-full flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">
            My tasks <span className="text-xs">view all</span>
          </h2>
          <div>...</div>
        </div>
        <MainCard
          id={1}
          task={"Sample"}
          tag="Tag"
          description={"Test description"}
          date="January 1, 2023"
        />
      </section>
      <section className="w-full">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-3/5">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Statistics</h2>
              <p className="text-sm text-slate-500">
                tasks created vs tasks completed
              </p>
              <div>
                <div className="min-h-20 h-36 border-2 flex items-center justify-center">
                  Graph
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-sm font-semibold">created</p>
                  <p className="text-sm font-semibold">completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="border-2 rounded-lg p-5 flex flex-col gap-2">
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-around items-center font-semibold">
                  <div>{"<"}</div>
                  <h3>Jan 1 - Dec 30</h3>
                  <div>{">"}</div>
                </div>
                <div className="text-xs">view all</div>
              </div>
              <div className="border flex flex-col justify-center items-center p-2 rounded-full">
                <div className="font-semibold text-xl">80%</div>
                <div className="text-xs">completed</div>
              </div>
              <div>
                <p className="text-sm font-semibold text-center">
                  You're doing good!
                </p>
                <p className="text-sm text-slate-500 text-center">
                  You almost reached your goal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-xl">Projects</h2>
              <span className="text-xs">view all</span>
            </div>
            <div>...</div>
          </div>
          <ul className="flex flex-col gap-2">
            <ProjectCard
              image={"Latest IMG"}
              name={"Latest"}
              tasks={2}
              overdue={0}
              date={"Jan 01 - Dec 30"}
              images={["IMG 1", "IMG 2", "IMG 3"]}
            />
            <ProjectCard
              image={"Sample IMG"}
              name={"Sample"}
              tasks={8}
              overdue={4}
              date={"Jun 01 - Jul 30"}
              images={["IMG 1", "IMG 2", "IMG 3"]}
            />
            <ProjectCard
              image={"Old IMG"}
              name={"Old"}
              tasks={12}
              overdue={3}
              date={"Nov 01 - Dec 30"}
              images={["IMG 1", "IMG 2", "IMG 3"]}
            />
          </ul>
        </div>
      </section>
    </>
  );
}

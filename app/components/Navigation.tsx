"use client";

import Link from "next/link";
import { FcClock, FcHome, FcExport } from "react-icons/fc";
import { GrMapLocation, GrTools } from "react-icons/gr";
import { usePathname } from "next/navigation";
import { auth } from "../../utils/firebase";

const routes = [
  { name: "Dashboard", path: "/" },
  { name: "Location", path: "/location" },
  { name: "Timekeeping", path: "/logs" },
  { name: "Workers", path: "/workers" },
];

function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/login" && (
        <div className="flex flex-col gap-5 justify-between items-center pt-8 px-4 lg:px-8 pb-2 min-h-screen shadow-lg">
          <ul className="w-full flex flex-col lg:font-semibold">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className="flex justify-center items-center lg:justify-start gap-2 py-3 hover:bg-slate-200 hover:rounded-2xl lg:px-1"
                >
                  {route.name === "Dashboard" && (
                    <FcHome className="p-1 border rounded-lg w-8 h-8" />
                  )}
                  {route.name === "Location" && (
                    <GrMapLocation className="p-1 border rounded-lg w-8 h-8" />
                  )}
                  {route.name === "Timekeeping" && (
                    <FcClock className="p-1 border rounded-lg w-8 h-8" />
                  )}
                  {route.name === "Workers" && (
                    <GrTools className="p-1 border rounded-lg w-8 h-8" />
                  )}
                  <span className="hidden lg:block">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="w-full lg:font-semibold">
            <Link
              href="/login"
              className="flex justify-center  lg:justify-start items-center hover:bg-red-200 hover:rounded-2xl gap-2 py-3"
            >
              <FcExport className="p-1 border border-red-200 rounded-lg w-8 h-8" />
              <button onClick={() => auth.signOut()}>
                <span className="hidden lg:block">Logout</span>
              </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navigation;

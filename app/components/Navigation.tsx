"use client";

import Link from "next/link";
import { FcClock, FcHome, FcExport } from "react-icons/fc";
import { GrMapLocation, GrTools } from "react-icons/gr";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { useEffect } from "react";

const routes = [
  { name: "Dashboard", path: "/" },
  { name: "Location", path: "/location" },
  { name: "Timekeeping", path: "/logs" },
  { name: "Workers", path: "/workers" },
];

function Navigation() {
  const [user, loading] = useAuthState(auth);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  return (
    <>
      {pathname !== "/login" && (
        <div className="flex flex-col gap-5 justify-between items-center w-fit pt-8 px-4 pb-2 min-h-screen shadow-lg">
          <ul className="w-full flex flex-col font-semibold">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className="flex items-center gap-2 hover:bg-slate-200/50 hover:rounded-2xl px-5 py-3"
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
                  <span>{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="w-full font-semibold">
            <Link
              href="/login"
              className="flex items-center gap-2 hover:bg-red-200/50 hover:rounded-2xl px-5 py-3"
            >
              <FcExport className="p-1 border rounded-lg w-8 h-8" />
              <button onClick={() => auth.signOut()}>Logout</button>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navigation;

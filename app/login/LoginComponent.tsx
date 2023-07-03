"use client";

import { FaHardHat } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

function LoginComponent() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login Successful 🚀");
        router.push("/");
      })
      .catch((error) => {
        toast.error("Invalid Credentials ☹️");
      });
  };

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading]);

  return (
    <div className="rounded-2xl bg-gray-500 shadow-2xl w-96 h-96">
      <div className="h-full flex flex-col justify-center">
        <FaHardHat className="w-full text-6xl text-center text-amber-300" />
        <div className="text-3xl text-center text-white font-extrabold tracking-wider">
          Smart Hardhat <br />
          Monitoring System
        </div>
        <form
          onSubmit={signIn}
          className="flex flex-col gap-4 items-center mt-5"
        >
          <input
            className="flex w-72 px-2 py-2 mx-8 rounded-lg text-semibold"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <input
            className="flex w-72 px-2 py-2 mx-8 rounded-lg text-semibold"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            type="submit"
            className="px-2 py-2 border-2 w-40 rounded-lg text-semibold "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;

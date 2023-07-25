"use client";

import { useRouter } from "next/navigation";
import { NavbarComponent } from "../components/NavbarComponent";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleOnsubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavbarComponent />
        <div className="flex-grow bg-green-400 flex items-center justify-center">
          <div className="p-3 rounded-md w-full bg-white text-center max-w-md">
            <form
              onSubmit={(e) => {
                handleOnsubmit(e);
              }}
            >
              <h1 className="font-bold text-3xl text-green-500 mb-5">
                Register
              </h1>
              <div className="flex flex-col justify-center items-center">
                <input
                  type="text"
                  className="rounded-md w-1/2 border border-black p-1 mb-5"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="rounded-md w-1/2 border border-black p-1 mb-5"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="rounded-md w-1/2 border border-black p-1 mb-5"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <input
                  type="email"
                  className="rounded-md w-1/2 border border-black p-1 mb-5"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="border border-black rounded-md w-1/4"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

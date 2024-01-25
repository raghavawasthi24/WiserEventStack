import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const inputfields = [
    {
      type: "text",
      label: "Email ",
      placeholder: "abc@work.com",
    },
    {
      type: "text",
      label: "Password ",
      placeholder: "Enter Password",
    },
  ];
  return (
    <section className="w-screen h-screen overflow-hidden flex">
      <img
        src="assets/loginBg.png"
        alt="loginLogo"
        className="w-1/2 hidden md:block h-full"
      />
      <div className="flex flex-col items-center w-full md:w-1/2 gap-6 pt-20">
        <img src="assets/WiserCountLogo.png" alt="" className="w-[100px]" />
        <div className="flex flex-col items-center gap-1">
          <p className="font-semibold text-4xl">Welcome Back</p>
          <p className="text-muted text-sm">Enter your Details</p>
        </div>
        <div className="w-[80%] sm:w-1/2 flex flex-col gap-3">
          {/* Mapping all input fields */}
          {inputfields.map((inputfield) => {
            return (
              <div className="w-full flex flex-col">
                <label htmlFor="">{inputfield.label}</label>
                <input
                  type={inputfield.type}
                  className="border rounded-2xl indent-2 py-1 px-2 outline-none"
                  placeholder={inputfield.placeholder}
                />
              </div>
            );
          })}
          <p className="text-muted text-xs self-end">ForgotPasword?</p>
          <Link
            to="/home"
            className="bg-primary text-white rounded-2xl py-1 px-2 text-center"
          >
            Sign In
          </Link>
        </div>
        <p className="text-xs">
          Don't have an account? <span className="text-primary">Sign Up</span>
        </p>
      </div>
    </section>
  );
}

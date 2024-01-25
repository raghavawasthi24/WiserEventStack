import React from "react";

export default function Login() {
  return (
    <section className="w-screen h-screen overflow-hidden flex">
      <img src="loginBg.png" alt="" className="w-1/2 h-full" />
      <div className="">
        <img src="" alt="" />
        <p>Welcome Back</p>
        <p>Emter your Details</p>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </div>
    </section>
  );
}

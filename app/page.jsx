"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const SubmitData = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    try {
      const data = await fetch(
        "https://noubodiez-backend-test.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );
      const result = await data.json();
      console.log(result);
      if (!result.success) {
        toast.error(result.message);
      }
      if (result.success) {
        document.getElementById("logoDiv").style.display = "block";
        setTimeout(() => {
          redirect("/projects");
        }, 1000);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error, "error");
    }
  };
  return (
    <main className="flex flex-col items-center justify-center  p-[80px] h-[100dvh] text-4xl font-bold">
      <Image
        src="/main_image.png"
        alt="main Image"
        loading="lazy"
        width={9000}
        height={9000}
        className="object-cover w-[500px] fixed top-20 h-[100px]"
      ></Image>
      <div className="mt-[125px]">All Projects Noubodiez in One List.</div>
      <form
        onSubmit={SubmitData}
        className="w-1/3 mx-auto mt-[50px]"
        method="post"
      >
        <div className="flex flex-col items-start justify-center gap-2">
          <label
            htmlFor="email"
            className="font-[500] text-3xl"
            style={{ color: "var(--foreground)" }}
          >
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="e.g. howard.thurman@gmail.com"
            className={`focus:border-redcolor w-full h-12 px-2 text-background text-xl border-[2px] placeholder:font-foreground placeholder:text-xl placeholder:font-semibold caret-background border-foreground  focus:outline-none  rounded-sm`}
          />
        </div>
        <div className="flex flex-col mt-10 items-start relative justify-center gap-2">
          <div
            onClick={(e) => {
              e.preventDefault();
              console.log("done");

              document.getElementById("hide").style.display = "block";
              document.getElementById("show").style.display = "none";
              document.getElementById("password").type = "text";
            }}
            id="show"
            className=" absolute right-3 top-1/2  h-10  bg-foreground text-background cursor-pointer p-2 text-sm  items-center justify-center gap-1 "
          >
            <Image
              src="/hide_password.svg"
              width={9099}
              height={9999}
              alt="icon"
              className="h-[25px] w-[25px]"
            ></Image>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();

              document.getElementById("password").type = "password";
              document.getElementById("hide").style.display = "none";
              document.getElementById("show").style.display = "block";
            }}
            id="hide"
            className=" absolute right-3 top-1/2  h-10  bg-foreground text-background cursor-pointer p-2 text-sm hidden items-center justify-center gap-1 "
          >
            <Image
              src="/show_password.svg"
              width={9099}
              height={9999}
              alt="icon"
              className="h-[25px] w-[25px]"
            ></Image>
          </div>
          <label
            htmlFor="password"
            className="font-[500] text-3xl"
            style={{ color: "var(--foreground)" }}
          >
            Password
          </label>

          <input
            required
            type="password"
            name="password"
            id="password"
            className={`focus:border-redcolor w-full h-12 px-2 text-background text-xl border-[2px] placeholder:font-foreground placeholder:text-xl placeholder:font-semibold caret-background border-foreground  focus:outline-none  rounded-sm`}
          />
        </div>
        <button type="submit" className="w-full h-14 mt-10 text-xl bg-redcolor">
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>
      <div
        id="logoDiv"
        className=" absolute hidden top-0 right-0 inset-0  bg-background"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/favicon.ico"
            alt="icon"
            width={9999999}
            height={99999999999}
            className="object-cover w-[250px] border-[1px] border-foreground rounded-full animate-rotateWithBorder h-[250px]"
          ></Image>
        </div>
      </div>
    </main>
  );
}

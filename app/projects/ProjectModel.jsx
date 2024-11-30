"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectModel = ({ link, name, img }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      target="_blank"
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`w-[300px] hover:scale-105 duration-300 h-[300px] rounded-lg relative`}
    >
      <Image
        src={img}
        alt="img"
        width={9999999}
        height={99999999}
        className="w-full rounded-xl h-full -z-10 object-cover"
      ></Image>
      <div
        className={` ${!hover && "hidden"}
         rounded-xl absolute bottom-0 left-0 duration-500 w-full h-full backdrop-blur-sm`}
      ></div>

      <div className={` duration-500 cursor-pointer ${!hover && "hidden"}`}>
        <p className="first-letter:uppercase p-4  text-3xl absolute bottom-0 z-10">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default ProjectModel;

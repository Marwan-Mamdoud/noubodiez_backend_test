import Image from "next/image";
import React from "react";
import ProjectModel from "./ProjectModel";
import Link from "next/link";

const Projects = () => {
  return (
    <main className="flex flex-col items-center justify-start p-[80px] h-[100dvh] text-4xl font-bold">
      <Link href="/">
        <Image
          src="/main_image.png"
          alt="main Image"
          loading="lazy"
          width={9000}
          height={9000}
          className="object-cover w-[500px] h-[100px]"
        ></Image>
      </Link>
      <section className="grid grid-cols-3 gap-16 mt-20">
        <ProjectModel
          img="/younesfilm.jpg"
          link="https://younesfilm-frontend.vercel.app/"
          name="Younes Film"
        />
        <ProjectModel img="/cbc.jpg" link="#" name="czech business council" />
        <ProjectModel
          img="/younesfilm.jpg"
          link="https://younesfilm-frontend.vercel.app/"
          name="Younes Film"
        />
        <ProjectModel img="/cbc.jpg" link="#" name="Czech Business Council" />
        <ProjectModel
          img="/younesfilm.jpg"
          link="https://younesfilm-frontend.vercel.app/"
          name="Younes Film"
        />
        <ProjectModel img="/cbc.jpg" link="#" name="Czech Business Council" />
      </section>
    </main>
  );
};

export default Projects;

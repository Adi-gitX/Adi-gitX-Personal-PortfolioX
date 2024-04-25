"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "webdevelopment intern at CODESOFT",
    description1:
      "Working on Personal Portfolio: Designed and developed a personal portfolio website to showcase projects and skills.",
    description2:
      "Calculator Application: Developed a calculator application with advanced functionalities using JavaScript.",
    description3:
      "Landing Page: Created a captivating landing page with smooth animations and interactive elements.",
    techstack: "HTML, CSS, JAVA-SCRIPT, REACT, NODEJS, NEXTJS",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        webdevelopment intern at CODESOFT
        <br /> APR,24 - Present
      </div>
    ),
  },
  {
    title: "Fullstack Dev, Prodigy",
    description1:
      "Responsive Landing Page: Developing a responsive landing page with modern design and smooth animations.",
    description2:
      "Creating a stopwatch application with precise timing functionalities using JavaScript.",
    description3:
      "Weather App: Built a weather application that displays current weather conditions using API integration.",
    techstack: "HTML, CSS, React.js,NODE.JS, VERCEL",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Fullstack Dev Intern, Prodigy
        <br /> 15th April, 2024 - 15th May, 2024
      </div>
    ),
  },
  {
    title: "Cyber security inern , ShadowFox",
    description1:
      "Currently taking a course on cybersecurity offered by Google, which covers the basics to advanced topics. .",
    description2:
      "Learning about various types of cyber attacks and how to prevent them.",
    description3:
      "Waiting for the conformation fron Shadowfox.",
    techstack: " python, kali linux, OpenVPN, Nmap,CompTIA A+",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Cyber security inern , ShadowFox
        <br /> April,14
      </div>
    ),
  },
  {
    title: "Campus Ambassador , iit kharagpur",
    description1:
      "Managed the workshops, events and hackathons in the college.",
    description2: "managed social events, social media events",
    description3: "made many connections with various investors and companies.",
    techstack: "event management, marketing team member",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Campus Ambassador , iit kharagpur
        <br /> Nov,2023 - Dec,2023
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;

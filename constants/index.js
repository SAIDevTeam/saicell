'use client';
import { textContainer ,textVariant2 } from "@motion/motion";
import { motion } from "framer-motion";

export const navLinks = [
  {
    id: "Home",
    title: "/",
  },
    {
      id: "Student",
      title: "studentpage" ,
    },
    {
      id: "Almuni",
      title: "almunipage",
    },
    {
      id: "Signup",
      title: "signup",
    },
   
  ];
export const devskills = [
  {
    id: "Web development",
    title: "WD",
    icon:"/webdevoper.svg",
    label:"web devopment"
  },
    {
      id: "App devolopment",
      title: "AD" ,
      icon:"/appdevoper.jpg",
      label:"app devopment"
    },
    {
      id: "Grapic Design",
      title: "GD",
      icon:"/graphicdesigner.jpg",
      label:"garpic designer"
    },
    {
      id: "Content Writter",
      title: "CW",
      icon:"/contentwritter.jpg",
      label:"content writer"
    },
    {
      id: "Digital Marketting",
      title: "DM",
      icon:"/digitalmarketer.jpg",
      label:"digital marketting"
    },
    {
      id: "UI/UX Designer",
      title: "UI",
      icon:"/ui_uxdevoper.jpg",
      label:"ui/ux devoplment"
    },
   
  ];
  export const TypingText = ({ title, textStyles }) => (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );




  
  export const technologies = [
    {
      name: "HTML 5",
      icon: "/tech/html.png",
      label:"HTML5",
      value:"HTML5"
    },
    {
      name: "CSS 3",
      icon: "/tech/css.png",
      label:"CSS 3",
      value:"CSS 3"
    },
    {
      name: "JavaScript",
      icon: "/tech/javascript.png",
      label:"JAVASCRIPT",
      value:"JAVASCRIPT"
    },
    {
      name: "TypeScript",
      icon: "/tech/typescript.png",
      label:"Typecript",
      value:"Typecript"
    },
    {
      name: "React JS",
      icon: "/tech/reactjs.png",
      label:"react js",
      value:"react js"
    },
    {
      name: "Redux Toolkit",
      icon: "/tech/redux.png",
      label:"react toolkit",
      value:"react toolkit"
    },
    {
      name: "Tailwind CSS",
      icon: "/tech/tailwind.png",
      label:"tailwind css",
      value:"tailwind css"
    },
    {
      name: "Node JS",
      icon: "/tech/nodejs.png",
      label:"node js",
      value:"node js"
    },
    {
      name: "MongoDB",
      icon: "/tech/mongodb.png",
      label:"Mongodb",
      value:"Mongodb"
    },
    {
      name: "Three JS",
      icon: "/tech/threejs.svg",
      label:"Three js",
      value:"Three js"
    },
    {
      name: "git",
      icon: "/tech/git.png",
      label:"git",
      value:"git"
    },
    {
      name: "figma",
      icon: "/tech/figma.png",
      label:"figma",
      value:"figma"
    },
    {
      name: "docker",
      icon: "/tech/docker.png",
      label:"docker",
      value:"docker"
    },
  ];


 export  const tables =[
    {title:"fsdfdsf",
    createdat:"24/7/2022",
     status:"active",
     
  }
  ]
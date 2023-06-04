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




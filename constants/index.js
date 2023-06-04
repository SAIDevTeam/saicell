'use client';
import { textContainer ,textVariant2 } from "@motion/motion";
import { motion } from "framer-motion";
export const navLinks = [
  {
    id: "Home",
    title: "social-media",
  },
    {
      id: "Help",
      title: "/" ||"",
    },
    {
      id: "Contuct Us",
      title: "shop",
    },
    {
      id: "SignUp",
      title: "consaltency",
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




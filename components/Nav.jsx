'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { navLinks } from "@/constants";
import { navVariants } from "@/motion/motion";





const Nav = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
      className={`sm:px-28 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-sky-500" : "bg-transparent"
        }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/"
          className='flex items-center gap-2 sm:basis-1/4' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src='/landing/dj_logo.png' alt='logo' className='w-16 h-16 object-contain' />
          <p className=' text-sm sm:text-[28px]  font-inter cursor-pointer flex '>
            SAICELL &nbsp;

          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 mr-20'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-slate-900" : "text-slate-800"
                } hover:text-slate-900 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`${nav.title}`}> {`${nav.id}`}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? "/landing/close.svg" : "/landing/menu.svg"}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link href={`${nav.title}`}> {`${nav.id}`}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </motion.div>
  )
}

export default Nav
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import login_validate_student from "@lib/validate";
import { login_validate_almuni } from "@lib/validate";
import { TypingText } from "@constants";
import { motion } from "framer-motion";
import { navVariants } from "@motion/motion";
import TextAnimation from "@components/landing/Textanimation";
import Student_signup from "./Student_signup";
import Almuni_signup from "./Almuni_signup";

const LogIn = () => {
 


  const [checked, setchecked] = useState({
    student_checked: "checked",
    student_opacity: "opacity-100",
    almuni_abled: "",
    almuni_opacity: "opacity-50",
    student_abled: "disabled",
    almuni_checked: "",
   
    pageid: "/studentpage"


  })

  const onclickstudentalmunibutton = () => {
    if (checked.student_checked === "checked") {
      setchecked({
        student_checked: "",
        student_opacity: "opacity-50",
        almuni_checked: "checked",
        almuni_opacity: "opacity-100",
        almuni_abled: "disabled",
        student_abled: "",
       

        pageid: "/almunipage"
      })
    }
    else {
      setchecked({
        student_checked: "checked",
        student_opacity: "opacity-100",
        almuni_abled: "",
        almuni_opacity: "opacity-50",
        student_abled: "disabled",
        almuni_checked: "",
        

        pageid: "/studentpage"
      })
    }
    console.log("pppppp")
  }


  return (
    <div className="px-10 py-16 xs:p-0 mx-auto bg-transparent md:w-full md:max-w-md">
      <TextAnimation text1="Welcome Back !" />

      <div className="text-left mt-2 ">
        Already have an account?{" "}
        <Link className="inline-block text-blue-500 ml-3 " href="/">
          LogIn
        </Link>
      </div>
      <div className="pt-2">
          <h1 className="font-inter text-left text-xl my-4">Login as</h1>
        </div>
      <div className="flex px-4 my-4 ">
       
        <button onClick={onclickstudentalmunibutton} disabled={...checked.student_abled} className={`flex-start ${checked.student_opacity} mr-5 rounded-full h-10 w-28 border border-blue-500 bg-blue-500 py-1.5 px-3 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center`}>

          <input onChange={onclickstudentalmunibutton} id="default-radio-1" type="radio" checked={...checked.student_checked} name="default-radio" className=" w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          Student
        </button>
        <button onClick={onclickstudentalmunibutton} disabled={...checked.almuni_abled} className={`flex-start ${checked.almuni_opacity} rounded-full h-10 w-28 border border-blue-500 bg-blue-500 py-1.5 px-3 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center`}>

          <input onChange={onclickstudentalmunibutton} id="default-radio-1" type="radio" checked={...checked.almuni_checked} name="default-radio" className=" w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          Almuni
        </button>

      </div>
     {(checked.student_checked === "checked") ?<>
     <Student_signup/>
     </>:<>
    <Almuni_signup/>
     </>}
     


    </div>
  );
};

export default LogIn;

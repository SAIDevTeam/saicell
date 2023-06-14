"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import login_validate_student from "@lib/validate";
import { login_validate_almuni } from "@lib/validate";
import { forgetpassword } from "@lib/validate";
import Image from "next/image";
import { motion } from 'framer-motion';
import { navLinks } from "@/constants";
import { navVariants } from "@/motion/motion";
import TextAnimation from "./landing/Textanimation";
import Link from "next/link";
const Forget_password = () => {
  const[send,setsend]=useState(false);
  const[resend ,setresend]= useState(false);
  const onSubmit = async (values) => {
    setsend(true);
    console.log("values");
    try{
    const response = await fetch("/api/sendmail", {
      method: "POST",
      body: JSON.stringify({
        redirect: false,
        email: values.email,
      }),
    });
    console.log(response.status)
    if(response.status=== 200){
    console.log("okkkk")
    }}catch(err){
      console.log(err)

    }finally{
setsend(false)
setresend(true)
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: forgetpassword,
    onSubmit,
  });

  const [email, setemail] = useState("");
  return (
    <div className="grid place-content-center  bg-transparent h-full  w-full rounded-lg divide-y divide-gray-200 ">
      <form className=" px-5 py-5" action="POST" onSubmit={formik.handleSubmit}>
        <label className="font-semibold  text-sm text-gray-600 pb-3 block">
          Enter Your Email
        </label>
        <div className="mb-4 mt-1">
          <input
            type="email"
            name="email"
            className="border rounded-lg px-3 py-2  text-sm w-full"
            placeholder="Enter email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="text-red-500 text-[8px] ">
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}
        </div>
        <button
          type="submit"
          disabled={send}
          className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          <span className=" mr-2 grid place-content-center">{send?<div><h4>Sending reset password link </h4> <Image src="/Spinner.svg" width={20} height={20} /></div>:`${resend?"Resend":"Send"}  reset password link`} </span>
        </button>
      {resend?  <TextAnimation textcolor="text-green-500" textsize="text-sm"  text1="An reset password link send to your email!" />:""}
      {resend?<><Link href="/"><button
         
         className="my-10 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
       >
         <span className=" mr-2 grid place-content-center"> Back to login page </span>
       </button>
           </Link>
           </>:<></>}
          </form>
          
    </div>
  );
};

export default Forget_password;

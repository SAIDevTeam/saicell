"use client"
import React from 'react'
import { useState } from 'react'
import TextAnimation from './landing/Textanimation'
import { useFormik } from 'formik'
import { resetpassword } from '@lib/validate';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Reset_password = () => {
    const [eye, seteye] = useState("password");
    const [show, setshow] = useState("/eyeclosed.svg");
    const[send,setsend]=useState(false);
  const[resend ,setresend]= useState(false);
  const [errr,seterrr] =useState();
  const router = useRouter();
    const icon = () => {
        if (eye == "password") {
          seteye("text");
        } else {
          seteye("password");
        }
        if (show == "/eyeopened.svg") {
          setshow("/eyeclosed.svg");
        } else {
          setshow("/eyeopened.svg");
        }
      };
    const onSubmit = async (values) => {
        setsend(true);
        console.log("values");
        try{
        const response = await fetch("/api/sendmail", {
          method: "PATCH",
          body: JSON.stringify({
            redirect: false,
            email: values.email,
            password:values.password
          }),
        });
        console.log(response)
        if(response.status === 404){
      seterrr("404");}
      if(response.status ===200){
        router.push("/");
      
        }
       }catch(err){
          console.log(err)
    
        }finally{
    setsend(false)
    setresend(true)
        }
      };
      const formik = useFormik({
        initialValues: {
            email:"",
          password: "",
          conpassword:""
        },
        validate: resetpassword,
        onSubmit,
      });
    
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
          {errr === "404" ? (
              <span className="text-red-500 text-sm ">Email not Registered please sign up</span>
            ) : (
              <></>
            )}
        </div>
    <div className="flex flex-row ">
        
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              onChange={(e) => {
               
              }}
            >
             New Password
            </label>
            <Image
              className="mx-4"
              src={show}
              width={15}
              height={15}
              onClick={icon}
            />
          </div>
          
            {" "}
            <div  className=" mt-1 mb-2 py-0">
            <input
              type={eye}
              name="password"
              className="border rounded-lg px-3 py-2  text-sm w-full"
              placeholder="Enter new password"
              {...formik.getFieldProps("password")}
            />
            {(formik.errors.password && formik.touched.password )? (
              <span className="text-red-500 text-[8px] ">
                {formik.errors.password}
              </span>
            ) : (
              <></>
            )}
            </div>
          
          <div className="flex flex-row ">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            >
              Confirm New Password
            </label>
            <Image
              className="mx-4"
              src={show}
              width={15}
              height={15}
              onClick={icon}
            />
          </div>
          
          <input
             type={eye}
            name="password"
            className="border rounded-lg px-3 py-2  text-sm w-full"
            placeholder="Confirm New password"
            {...formik.getFieldProps("conpassword")}
          />
          {(formik.errors.conpassword && formik.touched.conpassword) ? (
            <span className="text-red-500 text-[8px] mx-[1px]">
              {formik.errors.conpassword}
            </span>
          ) : (
            <></>
          )}
     <button
            type="submit"
          
            className="my-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2">Reset Your Password</span>
          </button>
        </form>
        
  </div>
  )
}

export default Reset_password
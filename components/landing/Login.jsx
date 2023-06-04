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
import TextAnimation from "./Textanimation";

const LogIn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      console.log(res);
      setProviders(res);
      console.log("ll"+session);
      //   console.log(`lll=${process.env.GOOGLE_ID}`);
    })();
  }, []);



  const [checked, setchecked] = useState({
    student_checked: "checked",
    student_opacity: "opacity-100",
    almuni_abled: "",
    almuni_opacity: "opacity-50",
    student_abled: "disabled",
    almuni_checked: "",
    formikid:login_validate_student,
   pageid:"/studentpage"


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
        formikid:login_validate_almuni,
       
        pageid:"/almunipage"
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
        formikiden:login_validate_student,
       
        pageid:"/studentpage"
      })
    }
    console.log("pppppp")
  }
  const onSubmit = async (values) => {
    console.log(values);
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/"
    })
    console.log(status);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    
    },
    validate: login_validate_student,
    onSubmit,
  });

  console.log(formik.errors);
  const submit = () => {
    router.push(`${checked.pageid}`);
  };
  return (
    <div className="px-10 py-16 xs:p-0 mx-auto bg-transparent md:w-full md:max-w-md">
      <TextAnimation text1="Welcome Back !" />

      <div className="text-left mt-2 ">
        Doesn't have an account?{" "}
        <Link className="inline-block text-cyan-500 ml-3 " href="/signup">
          SignUp
        </Link>
      </div>

      <div className="bg-transparent  w-full rounded-lg divide-y divide-gray-200 ">
        <form className="px-5 py-5 " action="POST" onSubmit={formik.handleSubmit}>
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

          <label className="font-semibold  text-sm text-gray-600 pb-3 block">
            E-mail
          </label>
          <div className="mb-4 mt-1">
            <input
              type="email"
              name="email"
              className="border rounded-lg px-3 py-2  text-sm w-full"
              placeholder="Enter email"
              {...formik.getFieldProps("email")}
            />
            {(formik.errors.email && formik.touched.email) ? (
              <span className="text-red-500 text-[8px] ">
                {formik.errors.email}
              </span>
            ) : (
              <></>
            )}
          </div>
          <label className="font-semibold text-sm text-gray-600 pb-3 block">
            Password
          </label>
          <div className="mb-4 mt-1">
            <input
              type="password"
              name="password"
              className="border rounded-lg px-3 py-2  text-sm w-full"
              placeholder="Enter password"
              {...formik.getFieldProps("password")}
            />
            {(formik.errors.password && formik.touched.password) ? (
              <span className="text-red-500 text-[8px] ">
                {formik.errors.password}
              </span>
            ) : (
              <></>
            )}
          </div>
          <button
            type="submit"
            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2">Login</span>
          </button>
          <div className="grid grid-cols-2 gap-1 mt-3">
            <div className="text-center sm:text-left whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-2 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block align-text-top"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
                <span className="inline-block ml-1">Forgot Password</span>
              </button>
            </div>
            <div className="text-center sm:text-right whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-2 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block align-text-bottom	"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="inline-block ml-1">Help</span>
              </button>
            </div>
          </div>
        </form>
        <div className=""></div>
        <div className="py-2">
          <div className="px-4 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              {providers &&
                //  Object.values(providers).map((provider) => (

                (<>
                  <button
                    type="button"
                    onClick={() => {
                      // submit();
                      signIn("google", {
                        redirect: false,
                        callbackUrl: "https://saicell.vercel.app/studentpage"
                      });

                    }}
                    // key={provider.name}
                    className="black_btn my-2 w-full h-10 "
                  >
                    <span className="place-content-center mr-2 flex flex-row">
                      <Image
                        src="/landing/googlelogo.svg"
                        width={20}
                        height={20}
                        className="mx-4"
                      />{" "}
                      {`SignIn with google`}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      submit();
                      signIn("github");

                    }}
                    // key={provider.name}
                    className="black_btn my-2 w-full h-10 "
                  >
                    <span className="place-content-center mr-2 flex flex-row">
                      <Image
                        src="/landing/githublogo.svg"
                        width={20}
                        height={20}
                        className="mx-4"
                      />{" "}
                      {`SignIn with github`}
                    </span>
                  </button>
                </>
                )
                //  
              }
            </div>
            <div className="text-center sm:text-right whitespace-nowrap"></div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default LogIn;

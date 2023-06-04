import React from "react";

const student_loginform = () => {
  return (
    <>
      <div>
        {" "}
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
          {formik.errors.email && formik.touched.email ? (
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
          {formik.errors.password && formik.touched.password ? (
            <span className="text-red-500 text-[8px] ">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default student_loginform;

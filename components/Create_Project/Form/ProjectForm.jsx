"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { devskills, technologies } from "@constants";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Tech from "@components/Tech";

const ProjectForm = ({
  onprice,
  onskills,
  ontitle,
  ondomain,
  skillerr,
  titleerr,
  domainerr,
  priceerr,
  submit,
  title,
  price,
  domain,
  skills,
}) => {
  const animatedComponents = makeAnimated();
  console.log(skillerr);
  return (
    <div>
      {" "}
      <form className="px-5 py-5 " action="POST">
        <div className=" rowproductform px-10 bg-white">
          <span>
            {submit ? (
              <>
                {" "}
                {title ? (
                  <>
                    <input
                      className="slide-up"
                      id="card"
                      type="text"
                      placeholder="Enter a suitable name"
                      value={title}
                      disabled={title}
                    />
                  </>
                ) : (
                  <>
                    <input
                      className="slide-up"
                      id="card"
                      type="text"
                      placeholder="Enter a suitable name"
                      onChange={ontitle}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                {" "}
                <input
                  className="slide-up"
                  id="card"
                  type="text"
                  placeholder="Enter a suitable name"
                  onChange={ontitle}
                />
              </>
            )}

            <label for="card">Title</label>
            <p className="text-red-500">{titleerr}</p>
          </span>
          <span>
            {submit ? (
              <>
                {" "}
                <input
                  className="slide-up"
                  id="expires"
                  type="number"
                  placeholder="Enter price"
                  disabled={price}
                  value={price}
                />
              </>
            ) : (
              <>
                {" "}
                <input
                  className="slide-up"
                  id="expires"
                  type="number"
                  placeholder="Enter price"
                  onChange={onprice}
                />
              </>
            )}

            <label for="expires">Price</label>
            <p className="text-red-500">{priceerr}</p>
          </span>
        </div>

        <div>
          <label className="font-semibold text-sm text-gray-600 mx-12 pb-3 block">
            Select domain
          </label>
          <div className=" mx-12 flex  flex-row">
            {submit ? (
              <>
                <Select
                  className="basic-single basis-1/2"
                  classNamePrefix="select"
                  defaultValue={domain}
                  isClearable="true"
                  isSearchable="true"
                  name="color"
                  options={devskills}
                  disabled
                />
              </>
            ) : (
              <>
                <Select
                  className="basic-single basis-1/2"
                  classNamePrefix="select"
                  defaultValue="select domain"
                  isClearable="true"
                  isSearchable="true"
                  name="color"
                  options={devskills}
                  onChange={ondomain}
                />
              </>
            )}
          </div>
          <p className="text-red-500 mx-12">{domainerr}</p>
          <label className="mx-12 font-semibold text-sm text-gray-600 pb-3 pt-3 block">
            Select required skills
          </label>
          <div className="mx-12">
            {submit ? (
              <>
                {" "}
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti={true}
                  options={technologies}
                  defaultValue={skills}
                  onChange={onskills}
                />
              </>
            ) : (
              <>
                {" "}
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue="Select required skills"
                  isMulti={true}
                  options={technologies}
                  onChange={onskills}
                />
              </>
            )}

            <p className="text-red-500 mx-0">{skillerr}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;

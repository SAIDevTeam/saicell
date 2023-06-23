"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import Image from "next/image";
import { technologies } from "@constants";
import { useState } from "react";
const SkillForm = ({skills ,handleExperienceChange ,skillExperiences}) => {
  console.log(skills);

 
  return (
    <div className="skillform">
      <div className="rowproductform ">
        
        {skills.map((skill) => (
          
          <span key={skill.value}>
             <select
              className="basic-slide"
              value={skillExperiences[skill.value] || 0}
              onChange={(event) => handleExperienceChange(event, skill)}
            >
              <option value="">No experience required</option>
              <option value="0.5">6 months</option>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} year{index === 0 ? "" : "s"}
                </option>
              ))}
            </select>
            <label for="height ">
              <Image src={skill.icon} width={30} height={30} />
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillForm;

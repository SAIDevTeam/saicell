/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";

import { BallCanvas } from "./canvas";

import { technologies } from "@constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4'>
      {technologies.map((technology) => (
        <div className='w-12 h-12' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
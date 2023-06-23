import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";

const Finishform = ({description ,handleDescriptionChange}) => {
  
  console.log(description);
  return (
    <div>
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
        Enter project description
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter your project description..."
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
    </div>
  );
};

export default Finishform;

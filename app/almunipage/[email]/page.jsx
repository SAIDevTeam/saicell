import Feed from "@components/Almuni/Feed";
import Sidenav from "@components/Almuni/Sidenav";
import Provider from "@components/Provider";
import React from "react";


const page = () => {
  return (
    <div className="h-[1024px]  pt-20">
      <Provider>
        
   <Sidenav/>
   <Feed/>
   </Provider>
   </div>
  );
};

export default page;

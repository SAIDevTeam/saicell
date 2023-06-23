import React, { useState, useEffect } from "react";

import { BallCanvas } from "@components/canvas";

const Productexplained = ({ handleClickOpen, data ,button1,buuton2 ,handleforproject}) => {
  console.log("55");
  console.log(data.skillexperience["JAVASCRIPT"]);
  const [name, setname] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${data.email}/details`);
      const result = await response.json();
      setname(result.username);
      console.log(name);
    };
    console.log(data.email);
    if (data.email) fetchPosts();
  }, [data.email]);
  const cardColors = ["#fc374e", "#36aeb3", "#162d59", "#f15f0e"];
  return (
    <div>
      {" "}
      <div className="pl-10">
        <div className="m-10 productbigcontainer">
          <div>
            <h1 className="mx-6 h1asking">Project Title:-</h1>
            <h1 className="">{data.title}</h1>
          </div>
          <div className="flex">
            <h2 className="mx-6 h1asking ">Creator:-</h2>
            <h1 className="h1name">{name}</h1>
          </div>
          <div className="flex">
            <h2 className="mx-6 h1asking ">Price:-</h2>
            <h1 className="h1price">${data.price}</h1>
          </div>
          <div className="flex">
            <h2 className="mx-6 h1asking ">Applied Student:-</h2>
            <h1 className="h1name">{data.appliedstudent}</h1>
          </div>
          <div className="flex">
            <h2 className="mx-6 h1asking ">Created at:-</h2>
            <h1 className="h1price">{data.date}</h1>
          </div>
          <div className="flex flex-row">
            <div className="basis-4/12 mt-3">
              <h2 className="mx-6 h1asking ">Skills Required:-</h2>
              <ol className="olcards">
                {data.skills.map((skill, index) => (
                  <li
                    key={index}
                    style={{
                      "--cardColor": cardColors[index % cardColors.length],
                    }}
                  >
                    <div class="content">
                      {data.skill}
                      {data.skillexperience ? (
                        <>
                          <div className="w-12 h-12 icon">
                            <BallCanvas icon={skill.icon} />
                          </div>
                          <div class="title">{skill.name}</div>
                          <div class="text">
                            {data.skillexperience[skill.value]?<>{` ${data.skillexperience[skill.value]} year experience`}</>:<></>}
                           
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 icon">
                            <BallCanvas icon={skill.icon} />
                          </div>
                         
                          <div class="text">
                          {skill.name}
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="basis-7/12">
              <h1 className="mx-6 h1asking">Project Description:-</h1>
              <p className="mx-5">{data.description}</p>
            </div>
          </div>
          <div className="flex flex-row my-8">
            <div className="basis-1/2"></div>
            <div className="flex-end basis-1/2 mr-10 ml-28 mt-4 grid grid-cols-2 gap-10">
              <button class="productbutton" onClick={handleClickOpen}>
              {button1}
              </button>
              <button class="productbutton1"onclick={handleforproject} >{buuton2}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productexplained;

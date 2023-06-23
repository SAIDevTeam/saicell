"use client";
import React from "react";
import { useState ,useEffect} from "react";
import { devskills } from "@constants";
import Product from "./Product";

const Feed = () => {
  console.log(devskills);
  const [skill, setskill] = useState([]);
  const [buttoncolor, setbuttoncolor] = useState("bg-blue-500");
  const filterbutton = (skillname) => {
    if (skill.includes(skillname)) {
      setskill(skill.filter((item) => item !== skillname));
    } else {
      setskill((prevArray) => [...prevArray, skillname]);
    }
  };
  const showall = () => {
    setskill("");
  };
  const colorchange = () => [setbuttoncolor("bg-green-900")];
  console.log(skill);
  const [data, setdata] = useState([]);
  const [posts,setAllPosts]=useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/project");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="ml-[24rem] ">
      <ul className="list-none hidden sm:flex flex-row gap-8 mt-3 mb-5 ">
        <li>
          <button
            onClick={showall}
            className={`${
              skill.length === 0 ? "opacity-100" : " opacity-50"
            } bg-blue-700  focus:shadow-sm focus:ring-4  text-white w-20 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block`}
          >
            <span className="inline-block mx-2"> show all</span>
          </button>
        </li>
        {devskills.map((devskill) => (
          <li key={devskill.id}>
            <button
              type="button"
              onClick={() => {
                filterbutton(`${devskill.id}`);

                console.log(`${devskill.id}`);
              }}
              className={`${
                skill.includes(devskill.id) ? "opacity-100" : " opacity-50"
              } bg-blue-700  focus:shadow-sm focus:ring-4  text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block`}
            >
              <span className="inline-block mx-2"> {`${devskill.id}`}</span>
            </button>
          </li>
        ))}
      </ul>
      <div>
        <ul className="list-none hidden sm:grid grid-cols-2 gap-4 ">
          {devskills.map((devskill, index) => (
            <li key={devskill.id}>
              {skill.includes(devskill.id) || skill.length === 0 ? (
                <>
                  <Product
                    index={index}
                    opacity="opacity-100"
                    devskill={devskill}
                  />
                </>
              ) : (
                <>
                  <Product
                    index={index}
                    opacity="opacity-10"
                    devskill={devskill}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="list-none hidden sm:grid grid-cols-2 gap-4 my-6">
          {devskills.map((devskill, index) => (
            <li key={devskill.id}>
              <>
                <Product
                  index={index}
                  opacity="opacity-100"
                  devskill={devskill}
                />
              </>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-6 grid grid-cols-2 gap-4">
        <Product index={0} devskill={devskills[0]} />
        <Product index={1} devskill={devskills[0]} />
        <Product index={2} devskill={devskills[0]} />
        <Product index={3} devskill={devskills[0]} />
        <Product index={4} devskill={devskills[0]} />
        <Product index={5} devskill={devskills[0]} />
        <Product devskill={devskills[1]} />
        <Product devskill={devskills[2]} />
        <Product devskill={devskills[3]} />
        <Product devskill={devskills[4]} />
        <Product devskill={devskills[5]} />
        <Product devskill={devskills[0]} />
        <Product devskill={devskills[0]} />
      </div>
      <div>
        {data ? (
          <>
            <ul className="list-none hidden sm:grid grid-cols-2 gap-4 my-6">
              {posts.map((project, index) => (
                <li key={project.id}>
                  <>
                    <Product
                      index={index}
                      opacity="opacity-100"
                      data={project}
                    />
                  </>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Feed;

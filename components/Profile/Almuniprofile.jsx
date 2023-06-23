"use client";
import React, { useEffect } from "react";


import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useParams } from "next/navigation";
import Allprojects from "@components/Projects/Allprojects";
import ActiveProject from "@components/Projects/ActiveProject";
import DonePprojects from "@components/Projects/DonePprojects";
import CanceledProject from "@components/Projects/CanceledProject";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Almuniprofile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const params = useParams();
  const [userdetails, setuserdetails] = React.useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.email}/details`);
      const data = await response.json();
      setuserdetails(data);
      console.log(data);
    };
    console.log(params?.email);
    if (params?.email) fetchPosts();
  }, [params?.email]);

  return (
    <div>
      {userdetails ? (
        <>
          <div className="bg-white md:mx-auto rounded shadow-xl w-full overflow-hidden">
            <div className="h-[200px] bg-gradient-to-l from-cyan-500 to-blue-500"></div>
            <div className="px-5 py-2 flex flex-col gap-3 pb-6">
              <div className="h-[150px] shadow-md w-[150px] rounded-full border-4 overflow-hidden -mt-20 border-white">
                <img
                  src={userdetails.image}
                  alt="image"
                  width={150}
                  height={150}
                  className="w-full h-full rounded-full object-center object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl text-slate-900 relative font-bold leading-6">
                  {userdetails.username}
                </h3>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  {" "}
                  Message
                </button>
              </div>
              <h3 className="text-md text-slate-500 font-medium leading-3 ">
                Email
              </h3>
              <p>{userdetails.email}</p>
              <h4 className="text-md text-slate-500 font-medium leading-3">
                Batch
              </h4>
              <p>{userdetails.passing_yaer} 2025</p>
              <h4 className="text-md text-slate-500 font-medium leading-3">
                Department
              </h4>
              <p className={` text-sm text-stone-500`}>CSE</p>

              <h4 className="text-md text-slate-500 font-medium leading-3">
                About
              </h4>
              <p className="text-sm text-stone-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                rem dolorem iure, ipsa maxime eos! Architecto eveniet nihil
                dolorum repudiandae odio accusamus temporibus est nam? Nisi
                laborum delectus omnis placeat voluptate fuga, quisquam
                voluptatum.
              </p>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="All Projects" {...a11yProps(0)} />
                    <Tab label="Active Projects" {...a11yProps(1)} />
                    <Tab label="Done Projects" {...a11yProps(2)} />
                    <Tab label="Canceled Projects" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                 <Allprojects/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <ActiveProject/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <DonePprojects/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <CanceledProject/>
                </TabPanel>
              </Box>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Almuniprofile;

"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { fadeIn } from "@motion/motion";

import Dialog from "@mui/material/Dialog";

import DialogContentText from "@mui/material/DialogContentText";

import Productexplained from "./Productexplained";
import { Tilt } from "react-tilt";


const Product = ({devskill,opacity ,index ,data}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const countprice = useMotionValue(0);
  const roundedprice = useTransform(count, Math.round);

  const studentnumber = 14;

  useEffect(() => {
    const animation = animate(count, 14, { duration: 3 });
     
    return animation.stop;
  }, []);
  const[name,setname]=useState("");
  const [date,setdate]=useState(0);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${data.email}/details`);
      const result = await response.json();
      setname(result.username);
      const currentDate = new Date();
      const differenceInMs = currentDate - data.date;
      const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      setdate(differenceInDays)
    };
    
    if (data) fetchPosts();

  }, []);
  return (
    <Tilt className={`productbody mr-10 ${opacity}`} >
      {data?<> <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="productcontainer">
        <div className="images">
          <img className="productimg" src={data.domain.icon} />
        </div>

        <div className="product">
          <div className="producth1">{data.title}</div>
          <div className="producth2 ">{data.domain.id}</div>
          <div className="flex">
            <h2 className="desc ">Creator:</h2>
            <p className="desc1 mt-3.5">{name}</p>
          </div>
          <p className="desc2">{`Created ${date}days ago`}</p>
          <div className="flex">
            <div className="coutdown">{data.price}</div>
            
          </div>
        
          <div className="flex">
            <motion.div className="coutdown">{studentnumber}</motion.div>
            <h3 className="desc3 mt-3.5 mx-2">Students already applied</h3>
          </div>
        
          
          <div className=" mr-5 ml-7 mt-4 grid grid-cols-2 gap-2">
            <button className="productbutton" onClick={handleClickOpen}>
              Show
            </button>
            <button className="productbutton1">Apply</button>
            <Dialog open={open} fullWidth="lg" maxWidth="lg" className="dialog" scroll="body">
              <DialogContentText>
             <Productexplained handleClickOpen={handleClickOpen}/>
              </DialogContentText>
            </Dialog>
          </div>
        </div>
      </motion.div></>:<> <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="productcontainer">
        <div className="images">
          <img className="productimg" src={devskill.icon} />
        </div>

        <div className="product">
          <div className="producth1">A E-commerce Website</div>
          <div className="producth2 ">{devskill.id}</div>
          <div className="flex">
            <h2 className="desc ">Creator:</h2>
            <p className="desc1 mt-3.5">Sudipta das</p>
          </div>
          <p className="desc2">Created 2days ago</p>
          <div className="flex">
            <div className="coutdown">$450</div>
            
          </div>
        
          <div className="flex">
            <motion.div className="coutdown">{rounded}</motion.div>
            <h3 className="desc3 mt-3.5 mx-2">Students already applied</h3>
          </div>
        
          
          <div className=" mr-5 ml-7 mt-4 grid grid-cols-2 gap-2">
            <button className="productbutton" onClick={handleClickOpen}>
              Show
            </button>
            <button className="productbutton1">Apply</button>
            <Dialog open={open} fullWidth="lg" maxWidth="lg" className="dialog" scroll="body">
              <DialogContentText>
             <Productexplained handleClickOpen={handleClickOpen}/>
              </DialogContentText>
            </Dialog>
          </div>
        </div>
      </motion.div></>}
     
    </Tilt>
  );
};
export default Product;

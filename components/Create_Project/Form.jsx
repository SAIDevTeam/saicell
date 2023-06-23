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
import Select from "@mui/material/Select";
import { devskills } from "@constants";
import ProjectForm from "./Form/ProjectForm";
import SkillForm from "./Form/SkillForm";
import Finishform from "./Form/Finishform";
import { useSearchParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Productexplained from "@components/Almuni/Productexplained";
const steps = [
  "Enter project details",
  "Skills & Experience",
  "Finish Project",
];
import { useState } from "react";
import AlertDialog from "./Form/Alretdialog";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Backdrop from '@mui/material/Backdrop';

import CircularProgress from '@mui/material/CircularProgress';
const Form = () => {
  const params = useParams();
  const email = params?.email;
  const modifiedEmail = email.replace("%40", "@");
 
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [submit, setsubmit] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseforsubmit = () => {
    setOpen(false);
    setsubmit(true);
    handleComplete();
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    if (activeStep === 1) {
      handleSkip();
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleSkip = () => {
    const updatedSkillExperiences = {};
    skills.forEach((skill) => {
      updatedSkillExperiences[skill.value] = 0;
    });
    handleExperienceChange(null, updatedSkillExperiences);
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setprice("");
    settitle("");
    setdomain("");
    setsubmit(false);
  };
  const [price, setprice] = useState("");
  const onprice = (val) => {
    console.log(val.target.value);
    setprice(val.target.value);
  };
  const [title, settitle] = useState("");

  const [skills, setskills] = useState([]);
  const [doamin, setdomain] = useState("");
  const [skillserr, setskillserr] = useState("");
  const [domainerr, setdomainserr] = useState("");
  const [titleerr, settittleserr] = useState("");
  const [priceerr, setpriceerr] = useState("");
  const onskills = (selectOption) => {
    console.log(selectOption);
    setskills(selectOption);
  };

  const ondomain = (selectOption) => {
    console.log(selectOption);
    setdomain(selectOption);
  };

  const ontitle = (val) => {
    console.log(val.target.value);
    settitle(val.target.value);
  };
  const handleComplete = () => {
    if (activeStep === 2) {
      setOpen(false);
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    } else {
      if (skills && price && doamin && title) {
        if (submit) {
          setOpen(false);
          const newCompleted = completed;
          newCompleted[activeStep] = true;
          setCompleted(newCompleted);
          handleNext();
        } else {
          handleClickOpen();
        }
      }
      if (!skills) {
        setskillserr("*Enter required skils for your project");
      } else {
        setskillserr("");
      }
      if (!price) {
        setpriceerr("*Enter required price");
      } else {
        setpriceerr("");
      }
      if (!doamin) {
        setdomainserr("*Enter required doamin for your project");
      } else {
        setdomainserr("");
      }
      if (!title) {
        settittleserr("*Enter suitable title for your project");
      } else {
        settittleserr("");
      }
    }
  };
  const [skillExperiences, setSkillExperiences] = useState({});
  const handleClickOpenforproductexplained = () => {
    setOpen(!open);
  };
  const handleExperienceChange = (event, skill) => {
    if (event) {
      const { value } = event.target;
      setSkillExperiences((prevState) => ({
        ...prevState,
        [skill.value]: value,
      }));
    }
  };
  console.log(skillExperiences);
  const [description, setDescription] = useState();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleCloseforshowproject = () => {};
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
  const data = {
    date: formattedDate,
    price: price,
    appliedstudent: 0,
    title: title,
    skills: skills,
    skillexperience: skillExperiences,
    description: description,
    email: modifiedEmail,
  };
  const router = useRouter();
  const [post,setpost] =useState(false);
  const handlePost = async () => {
    try {
      setpost(true);
      const response = await fetch("/api/project/new", {
        method: "POST",
        body: JSON.stringify({
          date: currentDate,
          price: price,
          appliedstudent: 0,
          title: title,
          skills: skills,
          skillexperience: skillExperiences,
          description: description,
          email: modifiedEmail,
          domain:doamin
        }),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }finally{
      await router.push(
        `/almunipage/${modifiedEmail}/?email=${modifiedEmail}`)
        setpost(false);
    }
  };
  return (
    <div className="form ml-[30em]  ">
      <div
        style={{ "box-shadow": "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
        className="bg-white pt-10 px-6 fixed top-28 rounded-xl h-[600px] w-[800px]"
      >
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;r Project is finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Show Demo
                  </Button>
                  <Button onClick={handlePost}>Post Projdect</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <div className="container ">
                  {activeStep === 0 ? (
                    <>
                      <ProjectForm
                        onprice={onprice}
                        ondomain={ondomain}
                        ontitle={ontitle}
                        onskills={onskills}
                        skillerr={skillserr}
                        priceerr={priceerr}
                        domainerr={domainerr}
                        titleerr={titleerr}
                        submit={submit}
                        title={title}
                        price={price}
                        domain={doamin}
                        skills={skills}
                      />
                    </>
                  ) : (
                    <>
                      {activeStep === 1 ? (
                        <>
                          <SkillForm
                            skills={skills}
                            handleExperienceChange={handleExperienceChange}
                            skillExperiences={skillExperiences}
                          />
                        </>
                      ) : (
                        <>
                          <Finishform
                            description={description}
                            handleDescriptionChange={handleDescriptionChange}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {activeStep === 1 ? (
                    <>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Edit required skills
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                    </>
                  )}
                  <Box sx={{ flex: "1 1 auto" }} />
                  {activeStep === 0 ? (
                    <>
                      <Button
                        onClick={handleNext}
                        sx={{ mr: 1 }}
                        disabled={!completed[0]}
                      >
                        Next
                      </Button>
                    </>
                  ) : (
                    <>
                      {activeStep === 1 ? (
                        <Button onClick={handleNext} sx={{ mr: 1 }}>
                          Skip
                        </Button>
                      ) : (
                        <>
                          <Button
                            onClick={handleNext}
                            sx={{ mr: 1 }}
                            disabled={!completed[1]}
                          >
                            Next
                          </Button>
                        </>
                      )}
                    </>
                  )}

                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Button
                        variant="caption"
                        sx={{ display: "inline-block" }}
                        className="text-green-500"
                      >
                        Step {activeStep + 1} already submitted
                      </Button>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Submit"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
          {activeStep === 0 ? (
            <>
              <AlertDialog
                open={open}
                handleClose={handleClose}
                handleCloseForSubmit={handleCloseforsubmit}
                button1="Edit"
                button2="submit"
                description="  Are you sure about the project title, price, and required skills? Check it because this cannot be changed further.
          <p>Double click to submit</p>"
              />
            </>
          ) : (
            <>
              {allStepsCompleted() ? (
                <>
                  {" "}
                  <Dialog
                    open={open}
                    fullWidth="lg"
                    maxWidth="lg"
                    className="dialog"
                    scroll="body"
                  >
                    <DialogContentText>
                      <Productexplained
                        handleClickOpen={handleClickOpenforproductexplained}
                        data={data}
                        buuton2="Post"
                        button1="Edit"
                        handleforproject={handlePost}
                      />
                    </DialogContentText>
                  </Dialog>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        
           
           <Backdrop
             sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
             open={post}
             
           >
             <CircularProgress color="inherit" />
             <h1>posting your project</h1>
           </Backdrop>
         
          
        </Box>
      </div>
    </div>
  );
};

export default Form;

"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  DocumentMinusIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { AvatarBadge } from "@chakra-ui/react";
const Sidenav = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const params = useParams();
  const [userdetails, setuserdetails] = useState();
  const [open, setOpen] = React.useState(0);
  const [show, setshow] = useState("hidden");
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    if (show === "hidden") {
      setshow(" ");
    } else {
      setshow("hidden");
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${email}/details`);
      const data = await response.json();
      setuserdetails(data);
      console.log(data);
    };
    console.log(params?.email);
    if (params?.email) fetchPosts();
  }, [params?.email]);

  const { data: session } = useSession();
  const router = useRouter();
  const [cretepost, setcreatepost] = useState(true);
  const craeteproject = async () => {
    setcreatepost(true);
    try {
      await router.push(
        `/almunipage/${userdetails.email}/create_project/?email=${userdetails.email}`
      );
    } finally {
      setcreatepost(false);
    }
  };
  useEffect(() => {
    if (userdetails)
      router.prefetch(
        `/almunipage/${userdetails.email}/create_project/?email=${userdetails.email}`
      );
  });

  return (
    <div className="">
      {" "}
      <Card className="fixed top-28 left-4 h-[calc(100vh-8rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <div className="pt-6">
            {userdetails ? (
              <>
             
                <div id="header-content" className="pl-4">
                <Link href={`/profile/${userdetails.email}`} >
                  <img
                    src={userdetails.image}
                    alt="Avatar"
                    className="mb-4 h-auto rounded-full align-middle"
                    style={{ "max-width": "50px" }}
                  />
               </Link>
                  <div className="mb-2 text-2xl font-medium leading-[1.2]">
                    {userdetails.username}
                  </div>
                  <p className="mb-4">{userdetails.email}</p>
                </div>
              </>
            ) : (
              <>
                <Stack spacing={1} className="mb-6">
                  <Skeleton variant="circular" width={50} height={50} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </Stack>
              </>
            )}
          </div>
          <hr className="border-gray-300" />
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className=" border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ClipboardDocumentIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  PROJECTS
                </Typography>
                <Chip
                  value="15"
                  size="sm"
                  variant="ghost"
                  className="mr-2 rounded-sm"
                />
              </AccordionHeader>
            </ListItem>
            <AccordionBody className={`py-1 ${show}`}>
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ClipboardDocumentCheckIcon
                      strokeWidth={3}
                      className="h-3 w-5"
                    />
                  </ListItemPrefix>
                  Finished Projects
                  <Chip
                    value="7"
                    size="sm"
                    variant="ghost"
                    className="ml-24 rounded-sm"
                  />
                </ListItem>

                <ListItem>
                  <ListItemPrefix>
                    <DocumentChartBarIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Live Projects
                  <Chip
                    value="8"
                    size="sm"
                    variant="ghost"
                    className="ml-32 rounded-sm"
                  />
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <DocumentMinusIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Canceled Projects
                  <Chip
                    value="8"
                    size="sm"
                    variant="ghost"
                    className="ml-24 rounded-sm"
                  />
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Sign Out
          </ListItem>
          <ListItem>
            <div class="my-2 mx-3">
              <Typography color="blue-gray" className="mr-auto font-normal">
                Sorted By
              </Typography>
              <div class="flex items-center">
                <label
                  class="relative flex cursor-pointer items-center rounded-full p-3"
                  for="html"
                  data-ripple-dark="true"
                >
                  <input
                    id="html"
                    name="type"
                    type="radio"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  />
                  <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </div>
                </label>
                <label
                  class="mt-px cursor-pointer select-none font-light text-gray-700"
                  for="html"
                >
                  Date
                </label>
              </div>
              <div class="inline-flex items-center">
                <label
                  class="relative flex cursor-pointer items-center rounded-full p-3"
                  for="react"
                  data-ripple-dark="true"
                >
                  <input
                    id="react"
                    name="type"
                    type="radio"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  />
                  <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </div>
                </label>
                <label
                  class="mt-px cursor-pointer select-none font-light text-gray-700"
                  for="react"
                >
                  Applicant number
                </label>
              </div>
            </div>
          </ListItem>
        </List>
        <button
          type="submit"
          className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          <span className="inline-block mr-2 " onClick={craeteproject}>
            {cretepost ?<>Create post</>:<>Creating post ....</>}
          </span>
        </button>
      </Card>
    </div>
  );
};

export default Sidenav;

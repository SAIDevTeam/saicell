import React from "react";
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
  TrashIcon,
  PencilIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import Button from '@mui/material/Button';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DonePprojects = () => {
  return (
    <div><div className="datatable">
    <div className="container">
      <ul className="responsive-table">
        <li className="table-header flex flex-row ">
          <div className="col col-1 pr-14 text-center">Title</div>
          <div className="col col-2 pr-5 ">Domain</div>
          <div className="col col-3 ">Stipend</div>
          <div className="col col-4 ">Applied student</div>
          <div className="col col-5  pl-4">Status</div>
          <div className="col col-6 text-center ">Action</div>
        </li>
        <li className="table-row  place-content-center ">
          <div className="col col-1 text-center" data-label="Job Id">
            A e-commerce Website
          </div>
          <div className="col col-2 text-center" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3 text-center" data-label="Amount">
            $350
          </div>
          <div className="col col-4 text-center" data-label="Amount">
            14
          </div>
          <div className="col col-5 text-center" data-label="Amount">
            Active
          </div>
          <div
            className="col col-6 grid grid-cols-3 gap-2"
            data-label="Payment Status"
          >
            <div></div>
            <Tooltip title="Show Project">
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          
          </div>
        </li>
        <li className="table-row  place-content-center ">
          <div className="col col-1 text-center" data-label="Job Id">
            A e-commerce Website
          </div>
          <div className="col col-2 text-center" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3 text-center" data-label="Amount">
            $350
          </div>
          <div className="col col-4 text-center" data-label="Amount">
            14
          </div>
          <div className="col col-5 text-center" data-label="Amount">
            Active
          </div>
          <div
            className="col col-6 grid grid-cols-3 gap-2"
            data-label="Payment Status"
          >
            <Tooltip title="Show Project">
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Project">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </li>
        <li className="table-row  place-content-center ">
          <div className="col col-1 text-center" data-label="Job Id">
            A e-commerce Website
          </div>
          <div className="col col-2 text-center" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3 text-center" data-label="Amount">
            $350
          </div>
          <div className="col col-4 text-center" data-label="Amount">
            14
          </div>
          <div className="col col-5 text-center" data-label="Amount">
            Active
          </div>
          <div
            className="col col-6 grid grid-cols-3 gap-2"
            data-label="Payment Status"
          >
            <Tooltip title="Show Project">
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Project">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </li>
        <li className="table-row  place-content-center ">
          <div className="col col-1 text-center" data-label="Job Id">
            A e-commerce Website
          </div>
          <div className="col col-2 text-center" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3 text-center" data-label="Amount">
            $350
          </div>
          <div className="col col-4 text-center" data-label="Amount">
            14
          </div>
          <div className="col col-5 text-center" data-label="Amount">
            Active
          </div>
          <div
            className="col col-6 grid grid-cols-3 gap-2"
            data-label="Payment Status"
          >
            <Tooltip title="Show Project">
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Project">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </li>
      </ul>
    </div>
  </div></div>
  )
}

export default DonePprojects
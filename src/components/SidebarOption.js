import React from "react";
import PieChartIcon from "@material-ui/icons/PieChart";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import DescriptionIcon from "@material-ui/icons/Description";
import AlarmIcon from "@material-ui/icons/Alarm";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import "./SidebarOption.css";
import Header from "../Header";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function SidebarOption() {
  const State = useSelector((state) => state);
  const name = State.user.displayName;

  return (
    <div className="sidebaroption">
      <div className="sidebar__header ">
        <img
          className="sidebar__photo rounded-circle"
          src={State.user.photoURL}
          alt="user"
        />
        <p>{name}</p>
        <Header />
      </div>

      <p>
        <span>
          <PieChartIcon />
        </span>
        Dashbord
      </p>
      <p>
        <span>
          <AssessmentIcon />
        </span>
        Reports
      </p>
      <p>
        <span>
          <DescriptionIcon />
        </span>
        Invoices
        <span className="addicon">
          <AddIcon className="addicon" />
        </span>
      </p>
      <p>
        <span>
          <ReceiptIcon />
        </span>
        Bills
      </p>
      <p>
        <span>
          <InsertDriveFileIcon />
        </span>
        Estimates
      </p>
      <p>
        <span>
          <AlarmIcon />
        </span>
        Track
      </p>

      <p>
        <span>
          <SettingsIcon />
        </span>
        Business Settings
      </p>
    </div>
  );
}

export default SidebarOption;

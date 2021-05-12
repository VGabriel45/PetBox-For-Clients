import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import GeneralForm from "../../FormComponents/GeneralForm";
import Appbar from "../../Navbar/Appbar";

import "../../../Styles/FormBackground.css";

const avatarStyle = {
  backgroundColor: "#6c93ea",
};

const Login = () => {
  return (
    <div className="formDiv">
      {" "}
      <Appbar />
      <div style={{ marginTop: "15%" }}></div>
      <div
        className="container is-max-desktop box mt-5"
        style={{ width: "30%" }}
      >
        <Grid align="center" className="mt-5">
          <Avatar style={avatarStyle}>
            <LockOpenIcon></LockOpenIcon>
          </Avatar>
          <h2 className="mt-4">Login to PetBox</h2>
        </Grid>
        <GeneralForm />
      </div>
    </div>
  );
};

export default Login;

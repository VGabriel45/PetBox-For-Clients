import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import GeneralForm from "../../FormComponents/GeneralForm";

const avatarStyle = {
  backgroundColor: "#6c93ea",
};

const Login = () => {
  return (
    <div className="container is-max-desktop box mt-5" style={{ width: "40%" }}>
      <Grid align="center" className="mt-2">
        <Avatar style={avatarStyle}>
          <LockOpenIcon></LockOpenIcon>
        </Avatar>
        <h2 className="mt-4">Login to PetBox</h2>
      </Grid>
      <GeneralForm />
    </div>
  );
};

export default Login;

import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../../src/Components/Page";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";
import Appbar from "../Navbar/Appbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Account = () => {
  const classes = useStyles();

  return (
    <Page title="Account">
      <Appbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12} className="mt-5">
            <Profile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;

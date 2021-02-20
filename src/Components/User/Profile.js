import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ProfileDetails from "./ProfileDetails";
import userService from "../User/Service/UserService";
import AuthService from "../Auth/Components/Service/auth-service";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}));

const Profile = ({ className, ...rest }) => {
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [user, setuser] = useState({});
  const [userPets, setuserPets] = useState([]);
  const [appointments, setappointments] = useState([]);
  const [questions, setquestions] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getUser();
    getPets();
    getCustomerAppointments();
    getCustomerQuestions();
  }, []);

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => setuser(res.data));
  }

  function getPets() {
    return userService
      .getCustomerPets(currentUser.id)
      .then((res) => setuserPets(res.data));
  }

  function getCustomerAppointments() {
    return userService
      .getCustomerAppointments(currentUser.id)
      .then((res) => setappointments(res.data));
  }

  function getCustomerQuestions() {
    return userService
      .getCustomerQuestions(currentUser.id, setquestions)
      .then((res) => setquestions(res.data));
  }

  function formatDateWithoutTime(date) {
    var parsedDate = new Date(date);
    return parsedDate.toLocaleDateString();
  }

  function formatDateWithTime(date) {
    var dateFormat = require("dateformat");
    var parsedDate = new Date(date);
    return dateFormat(parsedDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.username}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {user.firstName} {user.lastName}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions></CardActions>
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          <Link to={`/myProfile/${currentUser.id}/makeAppointment`}>
            Make appointment
          </Link>
        </Button>
        <Button color="primary" fullWidth variant="text">
          <Link to={`/myProfile/${currentUser.id}/askQuestion`}>
            Ask question
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;

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
import userService from "../User/Service/UserService";
import AuthService from "../Auth/Components/Service/auth-service";

import firebase from "../Firebase/firebase";

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
  const [userImage, setuserImage] = useState("");
  const classes = useStyles();

  useEffect(() => {
    getUser();
    getPets();
    getCustomerAppointments();
    getCustomerQuestions();
    getUserImage();
  }, []);

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => {
      setuser(res.data);
    });
  }

  function getPets() {
    return userService
      .getCustomerPets(currentUser.id)
      .then((res) => setuserPets(res.data));
  }

  async function getUserImage() {
    let storageRef = firebase.storage().ref();
    let fileRef = storageRef.child(await currentUser.id);
    setuserImage(await fileRef.getDownloadURL());
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

  async function uploadImage(e) {
    const file = await e.target.files[0];
    let storageRef = firebase.storage().ref();
    let fileRef = storageRef.child(user.id);
    await fileRef.put(file);
    console.log("uploading image");
    // window.location.reload();
  }

  return (
    <Card className={clsx(className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar
            className={classes.avatar}
            src={
              userImage
                ? userImage
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dQNbXUtTsaOUYmhy4VasurnACeQpjbg9Qw&usqp=CAU"
            }
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.username}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {user.firstName} {user.lastName}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
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
      <Button
        fullWidth
        variant="contained"
        style={{ backgroundColor: "white" }}
      >
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">Replace profile image</span>
          <input
            class="file-input"
            type="file"
            name="userImage"
            onChange={uploadImage}
          />
        </span>
      </Button>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        style={{ background: "#FF8C00" }}
      >
        <Typography
          className={classes.dateText}
          color="textSecondary"
          variant="body1"
          style={{ color: "white" }}
        >
          {`${moment().format("hh:mm A")}`}
        </Typography>
      </Button>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;

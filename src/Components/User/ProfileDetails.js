import React, { useState, useEffect } from "react";
import AuthService from "../Auth/Components/Service/auth-service";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import authHeader from "../Auth/Components/Service/auth-header";
import userService from "./Service/UserService";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";
import authService from "../Auth/Components/Service/auth-service";

const ProfileDetails = () => {
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [user, setuser] = useState({});

  const history = useHistory();

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => setuser(res.data));
  }

  const onChangeHandler = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    axios.put(
      `http://localhost:8080/customers/${currentUser.id}`,
      {
        id: currentUser.id,
        username: data.get("username"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        address: data.get("address"),
        phoneNumber: data.get("phoneNumber"),
        email: data.get("email"),
        gender: data.get("gender"),
        age: data.get("age"),
        lastSeen: new Date(),
      },
      { headers: authHeader() }
    );

    if (data.get("username") !== currentUser.username) {
      authService.logout();
      history.push(`/`);
      window.location.reload(`/`);
    } else {
      history.push(`/myProfile/${currentUser.id}`);
      window.location.reload(`/myProfile/${currentUser.id}`);
    }
  }

  return (
    <form className="form-signin" onSubmit={submitForm}>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button className="btn btn-primary" color="primary" variant="contained">
          <Link to="/" style={{ color: "white" }}>
            Home page
          </Link>
        </Button>
      </Box>
      <CardHeader
        subheader="The information can be edited"
        title={`${currentUser.username}'s profile`}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={onChangeHandler}
                value={user.firstName}
                variant="outlined"
              />
            </div>
            <div id="emailHelp" className="form-text">
              Who are you ?
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={onChangeHandler}
                value={user.lastName}
                variant="outlined"
              />
            </div>
            <div id="emailHelp" className="form-text">
              Family name.
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                onChange={onChangeHandler}
                value={user.phoneNumber}
                variant="outlined"
              />
            </div>
            <div id="emailHelp" className="form-text">
              Please provide a valid phone number so we can contact you when
              needed.
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select form-select-sm mb-3"
                aria-label=".form-select-sm example"
                id="gender"
                name="gender"
                onChange={onChangeHandler}
                value={user.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div id="emailHelp" className="form-text">
              Optional.
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChangeHandler}
                value={user.email}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                onChange={onChangeHandler}
                value={user.age}
              />
            </div>
            <div id="emailHelp" className="form-text">
              Optional.
            </div>
          </Grid>
          <Grid xs={12} item md={6}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                onChange={onChangeHandler}
                value={user.address}
              />
            </div>
            <div id="emailHelp" className="form-text">
              We'll never share your address with anyone else.
            </div>
          </Grid>
          <Grid xs={12} item md={6}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={onChangeHandler}
                value={user.username}
              />
            </div>
            <div id="emailHelp" className="form-text">
              If you change your username you will have to login again.
            </div>
          </Grid>
          <Divider />
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button
              type="submit"
              className="btn btn-primary"
              color="primary"
              variant="contained"
            >
              Save details
            </Button>
          </Box>
        </Grid>
      </CardContent>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string,
};

export default ProfileDetails;

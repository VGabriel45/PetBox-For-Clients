import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Grid, Paper, Avatar, Button } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TextField from "@material-ui/core/TextField";
import { Container, Row, Col } from "reactstrap";

import AuthService from "./Service/auth-service";
import GeneralForm from "../../FormComponents/GeneralForm";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const paperStyle = {
  padding: 20,
  height: "50vh",
  width: 400,
  margin: "20px auto",
};

const avatarStyle = {
  backgroundColor: "#6c93ea",
};

const btnStyle = { margin: "5vh 0" };

document.body.style = "background: #e5edf1";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.currentUser = AuthService.getCurrentUser();

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async redirectUser() {
    await this.props.history.push(`/`);
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.redirectUser();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="container is-max-desktop box mt-5">
        {/* <Grid>
          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
            style={{ margin: "0px" }}
          >
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center" className="mt-2">
                <Avatar style={avatarStyle}>
                  <LockOpenIcon></LockOpenIcon>
                </Avatar>
                <h2 className="mt-4">Login to PetBox</h2>
              </Grid>
              <TextField
                id="username"
                name="username"
                label="Username"
                placeholder="Enter username"
                fullWidth
                variant="filled"
                className="mt-4"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
              <Grid className="mt-4"></Grid>
              <TextField
                id="password"
                name="password"
                label="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                variant="filled"
                className="mt-4"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
              <Button
                ref={(c) => {
                  this.checkBtn = c;
                }}
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                style={btnStyle}
              >
                Login
              </Button>
            </Paper>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </Grid> */}
        <Grid align="center" className="mt-2">
          <Avatar style={avatarStyle}>
            <LockOpenIcon></LockOpenIcon>
          </Avatar>
          <h2 className="mt-4">Login to PetBox</h2>
        </Grid>
        <GeneralForm />
      </div>
    );
  }
}

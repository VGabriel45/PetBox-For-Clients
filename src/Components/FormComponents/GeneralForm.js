import React, { useState } from "react";
import FormValidationLogic from "./FormValidationLogic";
import authService from "../Auth/Components/Service/auth-service";
import { useHistory } from "react-router-dom";

const GeneralForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  const {
    checkForUsername,
    checkForPassword,
    usernameValid,
    passwordValid,
  } = FormValidationLogic({
    username: username,
    password: password,
  });

  //   const { login } = FormSubmitLogic({
  //     username: username,
  //     password: password,
  //   });

  const login = (e) => {
    e.preventDefault();
    authService.login(username, password).then(() => {
      redirectUser();
    });
  };

  const onChangeUsername = async (e) => {
    const username = await e.target.value;
    setusername(await username);
    checkForUsername();
  };

  const redirectUser = async () => {
    await history.push(`/myProfile`);
  };

  const onChangePassword = async (e) => {
    const password = await e.target.value;
    setpassword(await password);
    checkForPassword();
  };

  //   const onChangeEmail = async (e) => {
  //     const email = await e.target.value;
  //     setemail(await email);
  //     checkForEmail();
  //   };

  return (
    <React.Fragment>
      <form onSubmit={login}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={
                username.length > 0
                  ? usernameValid
                    ? "input is-primary"
                    : "input is-danger"
                  : "input "
              }
              type="text"
              placeholder="Username"
              onChange={onChangeUsername}
              value={username}
              name="name"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          {username.length > 0 ? (
            usernameValid === true ? (
              <p className="help is-success">Valid username</p>
            ) : (
              <p className="help is-danger">
                Username must be between 10 and 25 characters and must have the
                following format {"{username} - {clinic name}"}
              </p>
            )
          ) : (
            ""
          )}
        </div>
        <br />
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={
                password.length > 0
                  ? passwordValid
                    ? "input is-primary"
                    : "input is-danger"
                  : "input"
              }
              type="password"
              placeholder="Type your password"
              onChange={onChangePassword}
              value={password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          {password.length > 0 ? (
            passwordValid === true ? (
              <p className="help is-success">Valid password</p>
            ) : (
              <p className="help is-danger">
                Must match the password sent on your email
              </p>
            )
          ) : (
            ""
          )}
        </div>
        <br />
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control" style={{ width: "100%" }}>
            <button
              className="button is-link is-light"
              style={{ marginLeft: "60%" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default GeneralForm;

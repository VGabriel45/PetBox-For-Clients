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
    await history.push(`/`);
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
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class={usernameValid ? "input is-primary" : "input is-danger"}
              type="text"
              placeholder="Username"
              onChange={onChangeUsername}
              value={username}
              name="name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          {/* {console.log(usernameExists)} */}
          {usernameValid === true ? (
            <p class="help is-success">Valid username</p>
          ) : (
            <p class="help is-danger">
              Username must be between 10 and 25 characters and must have the
              following format {"{username} - {clinic name}"}
            </p>
          )}
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class={passwordValid ? "input is-primary" : "input is-danger"}
              type="password"
              placeholder="Type your password"
              onChange={onChangePassword}
              value={password}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          {passwordValid === true ? (
            <p class="help is-success">Valid password</p>
          ) : (
            <p class="help is-danger">
              Must match the password sent on your email
            </p>
          )}
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default GeneralForm;

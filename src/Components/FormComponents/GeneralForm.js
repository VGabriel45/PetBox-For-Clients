import React, { useState } from "react";
import FormValidationLogic from "./FormValidationLogic";

const GeneralForm = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const {
    checkForUsername,
    checkForEmail,
    usernameValid,
    emailValid,
  } = FormValidationLogic({
    username: username,
    email: email,
  });

  const onChangeUsername = async (e) => {
    const username = await e.target.value;
    setusername(await username);
    checkForUsername();
  };

  const onChangeEmail = async (e) => {
    const email = await e.target.value;
    setemail(await email);
    checkForEmail();
  };

  return (
    <React.Fragment>
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
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class={emailValid ? "input is-primary" : "input is-danger"}
            type="email"
            placeholder="Email input"
            onChange={onChangeEmail}
            value={email}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        {emailValid === true ? (
          <p class="help is-success">Valid email</p>
        ) : (
          <p class="help is-danger">
            Email must be between 12 and 50 characters and it must end with
            @gmail.com or @yahoo.com
          </p>
        )}
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
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
    </React.Fragment>
  );
};

export default GeneralForm;

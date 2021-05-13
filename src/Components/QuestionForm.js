import React, { useState } from "react";
import userService from "./User/Service/UserService";
import { useHistory } from "react-router-dom";
import AuthService from "./Auth/Components/Service/auth-service";
import { Link } from "react-router-dom";

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
import Appbar from "./Navbar/Appbar";
import LinearBuffer from "./LoadingComponents/LinearBuffer";

export default function QuestionForm() {
  const history = useHistory();
  const [notification, setnotification] = useState("");
  const [questionSent, setquestionSent] = useState(false);
  const [loading, setloading] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      setquestionSent(true);
      setnotification("Question has been sent.");
      setloading(false);
    }, 1500);
    const data = new FormData(e.target);

    userService.sendQuestion(
      userService.getCurrentUser().id,
      userService.getCurrentUser().username,
      data.get("text"),
      new Date()
    );
  }

  return (
    <div>
      <Appbar />
      <div
        className="box"
        style={{ width: "50%", margin: "0 auto", marginTop: "10%" }}
      >
        <Link to={`/myProfile/${userService.getCurrentUser().id}`}>
          Back to profile
        </Link>
        <form className="form-signin" method="post" onSubmit={submitForm}>
          <CardContent style={{ width: "100%", margin: "auto" }}>
            <CardHeader
              subheader="We will try to respond as soon as possible"
              title="Ask us a question..."
            />

            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Type your question
              </label>
              <textarea
                style={{ width: "100%", height: "200px" }}
                type="text"
                className="form-control"
                id="text"
                name="text"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </CardContent>
        </form>
        {loading ? (
          <LinearBuffer />
        ) : (
          <div>
            {questionSent ? (
              <div class="notification is-primary">
                <h2>{notification}</h2>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}

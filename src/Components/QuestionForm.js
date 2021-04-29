import React from "react";
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

export default function QuestionForm() {
  const history = useHistory();

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    userService.sendQuestion(
      userService.getCurrentUser().id,
      userService.getCurrentUser().username,
      data.get("text"),
      new Date()
    );

    history.push(`/myProfile/${AuthService.getCurrentUser().id}`);
  }

  return (
    <div>
      <form className="form-signin" method="post" onSubmit={submitForm}>
        <CardContent style={{ width: "100%", margin: "auto" }}>
          <CardHeader
            subheader="We will try to respond as soon as posible"
            title="Ask us a question..."
          />
          <Link to={`/myProfile/${userService.getCurrentUser().id}`}>
            Back to profile
          </Link>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Type your question
            </label>
            <textarea
              style={{ width: "30%", height: "200px" }}
              type="text"
              className="form-control"
              id="text"
              name="text"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </CardContent>
      </form>
    </div>
  );
}

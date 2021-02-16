import React from "react";
import userService from "./User/Service/UserService";
import { useHistory } from "react-router-dom";
import AuthService from "./Auth/Components/Service/auth-service";

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

    // window.location.reload(`/myProfile/${AuthService.getCurrentUser().id}`);
  }

  return (
    <div>
      <form className="form-signin" method="post" onSubmit={submitForm}>
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
      </form>
    </div>
  );
}

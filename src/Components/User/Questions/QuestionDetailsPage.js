import React, { useEffect, useState } from "react";
import QuestionLogic from "./QuestionLogic";

import AuthService from "../../Auth/Components/Service/auth-service";
import { Container } from "@material-ui/core";
import Appbar from "../../Navbar/Appbar";

export default function QuestionDetailsPage(props) {
  const {
    match: { params },
  } = props;

  const questionId = params.questionId;
  const currentUser = AuthService.getCurrentUser();

  const { questionDetails, formatDateWithTime } = QuestionLogic({
    customerId: currentUser.id,
    questionId: questionId,
  });

  return (
    <React.Fragment>
      <Appbar />
      <Container style={{ marginTop: "5%" }}>
        {questionDetails ? (
          <div class="card-content">
            <p className="title">Question: {questionDetails.text}</p>
            <p class="title" style={{ marginLeft: "25px" }}>
              {questionDetails.response.length > 0
                ? "Response: " + questionDetails.response
                : ""}
            </p>
            <br />
            <p class="subtitle">{questionDetails.author}</p>
            <p>
              Question date:{" "}
              <strong>{formatDateWithTime(questionDetails.date)}</strong>
            </p>
            {questionDetails.seen ? (
              <p style={{ color: "green" }}>Seen</p>
            ) : (
              <p style={{ color: "red" }}>Not seen</p>
            )}

            {questionDetails.solved ? (
              <p style={{ color: "green" }}>Solved</p>
            ) : (
              <p style={{ color: "red" }}>Not solved</p>
            )}
          </div>
        ) : (
          "Loading..."
        )}
      </Container>
    </React.Fragment>
  );
}

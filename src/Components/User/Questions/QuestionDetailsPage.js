import React, { useEffect, useState } from 'react';
import QuestionLogic from './QuestionLogic';

import AuthService from '../../Auth/Components/Service/auth-service';

export default function QuestionDetailsPage(props) {

    const {
        match: { params },
    } = props;

    const questionId = params.questionId;
    const currentUser = AuthService.getCurrentUser();

    const { questionDetails } = QuestionLogic({ customerId: currentUser.id, questionId: questionId })

    return (
        <React.Fragment>
            {console.log(questionId)}
            {console.log(currentUser)}
            {questionDetails ?
                <div>
                    <h3>Question: {questionDetails.text}</h3>
                    <h4>Date: {questionDetails.date}</h4>
                    <p>Visibility: {questionDetails.seen ? "Seen" : "Not seen"}</p>
                    <p>Status: {questionDetails.status ? "Solved" : "Not solved"}</p>
                    <h4>Response: {questionDetails.response}</h4>
                </div>
                : "Loading..."}
        </React.Fragment>

    );
}

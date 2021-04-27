import React, { useState, useEffect } from 'react'
import axios from 'axios';
import authHeader from '../../Auth/Components/Service/auth-header';

const API_URL = "http://localhost:8080/customers";

const QuestionLogic = ({ customerId, questionId }) => {

    const [questionDetails, setquestionDetails] = useState();

    useEffect(() => {
        getQuestionDetails();
    }, [])

    const getQuestionDetails = () => {
        axios.get(API_URL + `/${customerId}/questions/${questionId}`, {
            headers: authHeader(),
        }).then((res) => setquestionDetails(res.data));
    };

    return { questionDetails };

}

export default QuestionLogic;

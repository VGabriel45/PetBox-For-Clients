import React, { useState, useEffect } from "react";
import AuthService from "../../Auth/Components/Service/auth-service";
import userService from "../../User/Service/UserService";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function QuestionsPage() {
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [user, setuser] = useState({});
  const [questions, setquestions] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getUser();
    getCustomerQuestions();
  }, []);

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => setuser(res.data));
  }

  function getCustomerQuestions() {
    return userService
      .getCustomerQuestions(currentUser.id, setquestions)
      .then((res) => setquestions(res.data));
  }

  function formatDateWithTime(date) {
    var dateFormat = require("dateformat");
    var parsedDate = new Date(date);
    return dateFormat(parsedDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  }

  function questionsTable() {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Question</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Seen</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Response</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((q) => (
              <StyledTableRow key={currentUser.id}>
                <StyledTableCell component="th" scope="row">
                  <Link
                    to={`/myProfile/${currentUser.id}/questions/${q.id}/details`}
                    style={{ textDecoration: "none" }}
                  >
                    {q.text}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {formatDateWithTime(q.date)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {q.seen ? "Seen" : "Not seen"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {q.solved ? "Solved" : "Waiting"}
                </StyledTableCell>
                <StyledTableCell align="right">{q.response}</StyledTableCell>
                {console.log(q)}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <h1 className="title">My questions</h1>
        {questionsTable()}
      </div>
    </div>
  );
}

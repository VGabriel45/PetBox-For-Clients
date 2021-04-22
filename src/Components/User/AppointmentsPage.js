import React, { useState, useEffect } from "react";
import AuthService from "../Auth/Components/Service/auth-service";
import userService from "../User/Service/UserService";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";

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
  const [appointments, setappointments] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getUser();
    getCustomerAppointments();
  }, []);

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => setuser(res.data));
  }

  function getCustomerAppointments() {
    return userService
      .getCustomerAppointments(currentUser.id)
      .then((res) => setappointments(res.data));
  }

  function formatDateWithoutTime(date) {
    var parsedDate = new Date(date);
    return parsedDate.toLocaleDateString();
  }

  function appointmentsTable() {
    return (
      <TableContainer component={Paper}>
        <Link to={`/myProfile/${currentUser.id}`}>Back to profile</Link>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Reason</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Hour</StyledTableCell>
              <StyledTableCell align="right">Seen</StyledTableCell>
              <StyledTableCell align="right">Confirmation</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((a) => (
              <StyledTableRow key={currentUser.id}>
                <StyledTableCell align="right">{a.reason}</StyledTableCell>
                <StyledTableCell align="right">
                  {formatDateWithoutTime(a.dateOfAppointment)}
                </StyledTableCell>
                <StyledTableCell align="right">{a.hour}</StyledTableCell>
                <StyledTableCell align="right">
                  {a.seen ? "Seen" : "Not seen"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {a.accepted
                    ? "Accepted"
                    : !a.accepted && !a.declined
                      ? "Waiting"
                      : a.declined
                        ? "Declined"
                        : "Waiting"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {a.status ? "Finished" : "In progress"}
                </StyledTableCell>
                {console.log(a)}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div>
      <h1>My appointments</h1>
      {appointmentsTable()}
    </div>
  );
}

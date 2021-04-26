import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import authHeader from "../Auth/Components/Service/auth-header";
import AuthService from "../Auth/Components/Service/auth-service";
import userService from "../User/Service/UserService";

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

export default function PetsPage() {
  const classes = useStyles();
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [user, setuser] = useState({});
  const [userPets, setuserPets] = useState([]);

  useEffect(() => {
    getUser();
    // getPets();
  }, []);

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => setuser(res.data)).then(getPets());
  }

  function getPets() {
    return userService
      .getCustomerPets(currentUser.id)
      .then((res) => setuserPets(res.data));
  }

  function petTable() {
    return (
      <TableContainer component={Paper}>
        <Link to={`/myProfile/${currentUser.id}`}>Back to profile</Link>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Race</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Color</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userPets.map((pet) => (
              < StyledTableRow key={currentUser.id} >
                <StyledTableCell component="th" scope="row">
                  <Link
                    to={`/myProfile/${currentUser.id}/pets/${pet.id}/details`}
                    style={{ textDecoration: "none" }}
                  >
                    {pet.name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">{pet.age}</StyledTableCell>
                <StyledTableCell align="right">{pet.race}</StyledTableCell>
                <StyledTableCell align="right">{pet.gender}</StyledTableCell>
                <StyledTableCell align="right">{pet.color}</StyledTableCell>
                <StyledTableCell align="right">{pet.type}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    );
  }

  return (
    <div>
      <Container maxWidth="lg" className="mt-4">
        <h1>My pets</h1>
        {petTable()}
      </Container>
    </div>
  );
}

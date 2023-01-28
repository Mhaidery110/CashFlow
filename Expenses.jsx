import React from "react";
import {Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";

function Expenses(){
    return <div>
        <h1>Expenses</h1>
        <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Father's Name</TableCell>
        <TableCell>Surname</TableCell>
        <TableCell>Gender</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Contact</TableCell>
        <TableCell>Alt Contact</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Permanent Add</TableCell>
        <TableCell>State</TableCell>
        <TableCell>Country</TableCell>
        <TableCell>Pin</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>

        </TableRow>
      </TableBody>

    </Table>
  </TableContainer>

    </div>
}


export default Expenses;
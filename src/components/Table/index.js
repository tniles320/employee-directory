import React from "react";
import TableRow from "../TableRow";
import "./style.css";

function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th name="name">Name</th>
            <th name="username">Username</th>
            <th name="email">Email</th>
            <th name="gender">Gender</th>
            <th name="age">Age</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <TableRow employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

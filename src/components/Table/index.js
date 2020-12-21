import React from "react";
import TableRow from "../TableRow";

function Table(props) {
  return (
    <div>
      <button onClick={props.handleBtnClick}>button</button>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
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

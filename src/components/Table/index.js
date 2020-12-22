import React from "react";
import TableRow from "../TableRow";

function Table(props) {
  const { handleName, handleUsername, handleEmail } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th name="name" onClick={handleName}>
              Name
            </th>
            <th name="username" onClick={handleUsername}>
              Username
            </th>
            <th name="email" onClick={handleEmail}>
              Email
            </th>
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

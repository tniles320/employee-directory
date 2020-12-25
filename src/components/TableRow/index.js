import React from "react";
import "./style.css";

function TableRow(props) {
  const { employee } = props;
  return (
    <tr>
      <td width="10%">
        <img
          alt={`${employee.name.first} ${employee.name.last}`}
          src={employee.picture.medium}
        />
      </td>
      <td width="15%">{`${employee.name.first} ${employee.name.last}`}</td>
      <td width="15%">{employee.login.username}</td>
      <td width="30%">{employee.email}</td>
      <td width="15%">{employee.gender}</td>
      <td width="15%">{employee.dob.age}</td>
    </tr>
  );
}

export default TableRow;

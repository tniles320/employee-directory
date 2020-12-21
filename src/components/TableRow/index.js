import React from "react";

function TableRow(props) {
  const { employee } = props;
  return (
    <tr>
      <td>
        <img
          alt={`${employee.name.first} ${employee.name.last}`}
          src={employee.picture.thumbnail}
        />
      </td>
      <td>{`${employee.name.first} ${employee.name.last}`}</td>
      <td>{employee.login.username}</td>
      <td>{employee.email}</td>
      <td>{employee.gender}</td>
      <td>{employee.dob.age}</td>
    </tr>
  );
}

export default TableRow;

import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function EmployeeTable() {
  const [employee, setEmployee] = useState({
    name: "",
    username: "",
    email: "",
    gender: "",
    age: "",
    image: "",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.fetchEmployees()
      .then((res) => {
        res.data.results.map((employee) => {
          return setEmployee({
            name: `${employee.name.first} ${employee.name.last}`,
            username: employee.login.username,
            email: employee.email,
            gender: employee.gender,
            age: employee.dob.age,
            image: employee.picture.thumbnail,
          });
        });
      })
      .catch((err) => console.log(err));
  }

  return <div>{console.log(employee)}</div>;
}

export default EmployeeTable;

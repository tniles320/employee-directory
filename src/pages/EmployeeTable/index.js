import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Table from "../../components/Table";

function EmployeeTable() {
  const [employee, setEmployee] = useState({
    employees: [],
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.fetchEmployees()
      .then((res) => {
        return setEmployee({
          employees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  function handleName(event) {
    event.preventDefault();
    employee.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
    return setEmployee({
      employees: employee.employees,
    });
  }

  function handleUsername(event) {
    event.preventDefault();
    employee.employees.sort((a, b) =>
      a.login.username.localeCompare(b.login.username)
    );
    return setEmployee({
      employees: employee.employees,
    });
  }

  function handleEmail(event) {
    event.preventDefault();
    employee.employees.sort((a, b) => a.email.localeCompare(b.email));
    return setEmployee({
      employees: employee.employees,
    });
  }

  return (
    <div>
      <Table
        employees={employee.employees}
        handleName={handleName}
        handleUsername={handleUsername}
        handleEmail={handleEmail}
      />
    </div>
  );
}

export default EmployeeTable;

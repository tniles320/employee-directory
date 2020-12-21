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

  function handleBtnClick() {
    console.log(employee.employees[0].name);
  }

  return (
    <div>
      <Table employees={employee.employees} handleBtnClick={handleBtnClick} />
    </div>
  );
}

export default EmployeeTable;

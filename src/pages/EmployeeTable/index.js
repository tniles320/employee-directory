import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Table from "../../components/Table";
import Buttons from "../../components/Buttons";

function EmployeeTable() {
  const reverseBtn = document.getElementById("reverse-btn");

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
    reverseBtn.classList.add("show");
    reverseBtn.innerHTML = "&#x21E7;";
    employee.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
    return setEmployee({
      employees: employee.employees,
    });
  }

  function handleUsername(event) {
    event.preventDefault();
    reverseBtn.classList.add("show");
    reverseBtn.innerHTML = "&#x21E7;";
    employee.employees.sort((a, b) =>
      a.login.username.localeCompare(b.login.username)
    );
    return setEmployee({
      employees: employee.employees,
    });
  }

  function handleEmail(event) {
    event.preventDefault();
    reverseBtn.classList.add("show");
    reverseBtn.innerHTML = "&#x21E7;";
    employee.employees.sort((a, b) => a.email.localeCompare(b.email));
    return setEmployee({
      employees: employee.employees,
    });
  }

  function handleReverseOrder(event) {
    event.preventDefault();
    if (reverseBtn.innerHTML === "⇧") {
      reverseBtn.innerHTML = "&#x21E9;";
    } else {
      reverseBtn.innerHTML = "&#x21E7;";
    }
    const reverseEmployee = employee.employees.reverse();
    return setEmployee({
      employees: reverseEmployee,
    });
  }

  return (
    <div>
      <Buttons
        handleName={handleName}
        handleUsername={handleUsername}
        handleEmail={handleEmail}
        handleReverseOrder={handleReverseOrder}
      />
      <Table employees={employee.employees} />
    </div>
  );
}

export default EmployeeTable;

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

  // api call when the page is loaded, sets employee state
  function loadEmployees() {
    API.fetchEmployees()
      .then((res) => {
        return setEmployee({
          employees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  // shows arrow button, adds up arrow, adds green color
  const btnFunction = () => {
    reverseBtn.classList.add("show");
    reverseBtn.innerHTML = "&#x21E7;";
    reverseBtn.style.color = "green";
  };

  // sorts employees alphabetically by name
  function handleName(event) {
    event.preventDefault();
    btnFunction();
    employee.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
    return setEmployee({
      employees: employee.employees,
    });
  }

  // sorts employees alphabetically by username
  function handleUsername(event) {
    event.preventDefault();
    btnFunction();
    employee.employees.sort((a, b) =>
      a.login.username.localeCompare(b.login.username)
    );
    return setEmployee({
      employees: employee.employees,
    });
  }

  // sorts employees alphabetically by email
  function handleEmail(event) {
    event.preventDefault();
    btnFunction();
    employee.employees.sort((a, b) => a.email.localeCompare(b.email));
    return setEmployee({
      employees: employee.employees,
    });
  }

  // reverses order of employee list and changes arrow button up/down, green/red
  function handleReverseOrder(event) {
    event.preventDefault();
    if (reverseBtn.innerHTML === "⇧") {
      reverseBtn.innerHTML = "&#x21E9;";
      reverseBtn.style.color = "red";
    } else {
      reverseBtn.innerHTML = "&#x21E7;";
      reverseBtn.style.color = "green";
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

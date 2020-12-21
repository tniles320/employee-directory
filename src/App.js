import React from "react";
import EmployeeTable from "../src/pages/EmployeeTable";
import Heading from "./components/Heading";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Heading />
      <Wrapper>
        <EmployeeTable />
      </Wrapper>
    </div>
  );
}

export default App;

import React, { createContext } from "react";

const EmployeeContext = createContext({
  name: "",
  username: "",
  email: "",
  gender: "",
  age: "",
  image: "",
});

export default EmployeeContext;

import React, { createContext, useState } from "react";

export const addProjectContext = createContext(); //creating context

export const EditProjectContext = createContext();

const ContextApi = ({ children }) => {
  const [addProjectResponse, setAddProjectResponse] = useState([]); //
  const [editProjectResponse, setEditProjectResponse] = useState([]);

  return (
    <addProjectContext.Provider
      value={{ addProjectResponse, setAddProjectResponse }}
    >
      <EditProjectContext.Provider
        value={{ editProjectResponse, setEditProjectResponse }}
      >
        {children}
      </EditProjectContext.Provider>
    </addProjectContext.Provider>
  );
};

export default ContextApi;

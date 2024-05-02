import React, { createContext, useState, useContext } from 'react';

// Creating the context
const UserRoleContext = createContext();

// Provider component that wraps part of your application
export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("user");

  // Value provided to the consuming components
  const value = {
    userRole,
    setUserRole,
  };

  return (
    <UserRoleContext.Provider value={value}>
      {children}
    </UserRoleContext.Provider>
  );
};

// Custom hook to use the userRole context
export const useUserRole = () => {
  return useContext(UserRoleContext);
};

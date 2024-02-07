import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [myborder, setmyBorder] = useState(false);
  const [showPassword,setShowPassword] = useState(false)


 

  const value = {
    myborder,
    setmyBorder,
    showPassword,
    setShowPassword,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

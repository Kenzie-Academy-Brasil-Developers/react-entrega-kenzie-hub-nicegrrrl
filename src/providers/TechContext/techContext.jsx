import { createContext, useContext, useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [createTech, setCreateTech] = useState(false);

  return (
    <TechContext.Provider value={{ createTech, setCreateTech }}>
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);

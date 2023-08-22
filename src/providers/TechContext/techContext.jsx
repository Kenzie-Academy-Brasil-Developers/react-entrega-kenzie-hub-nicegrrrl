import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useUserContext } from "../UserContext/userContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [createTech, setCreateTech] = useState(false);

  const { setTechList } = useUserContext();

  const createTechRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@kenzieHub:token");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setTechList([...techList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ createTech, setCreateTech, createTechRequest }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);

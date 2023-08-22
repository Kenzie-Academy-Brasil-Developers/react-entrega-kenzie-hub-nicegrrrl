import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useUserContext } from "../UserContext/userContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [createTech, setCreateTech] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const { techList, setTechList } = useUserContext();

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

  const updateTechRequest = async (formData) => {
    try {
      const techId = editingTech.id;
      const token = localStorage.getItem("@kenzieHub:token");

      const { data } = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      setEditingTech(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        setCreateTech,
        createTechRequest,
        editingTech,
        setEditingTech,
        updateTechRequest,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);

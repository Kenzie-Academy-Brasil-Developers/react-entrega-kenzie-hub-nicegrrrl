import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useUserContext } from "../UserContext/userContext";
import { toast } from "react-toastify";

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

      setTechList([...techList, data]);

      setCreateTech(false);

      toast.success("Tech criada com sucesso 🎉");
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

      toast.success("Status da tech alterado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTaskRequest = async (deletingId) => {
    try {
      const token = localStorage.getItem("@kenzieHub:token");

      await api.delete(`/users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = techList.filter((tech) => tech.id !== deletingId);
      setTechList(newTechList);

      toast.success("Tech deletada com sucesso 🎉");
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
        deleteTaskRequest,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);

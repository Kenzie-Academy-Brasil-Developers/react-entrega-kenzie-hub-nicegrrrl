import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    const loadUser = async () => {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@kenzieHub:token");
      }
    };
    if (token) {
      loadUser();
    }
  }, []);

  const userRegisterRequest = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/users", formData);
      navigate("/");
      toast.success("Cadastro realizado com sucesso 🎉");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("Este email já foi cadastrado 😅");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLoginRequest = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@kenzieHub:token", data.token);
      // localStorage.setItem("@kenzieHub:userId", data.user.id);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Email ou senha não correspondem 😅");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogoutButtonClick = () => {
    localStorage.removeItem("@kenzieHub:token");
    // localStorage.removeItem("@kenzieHub:userId");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegisterRequest,
        userLoginRequest,
        handleLogoutButtonClick,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

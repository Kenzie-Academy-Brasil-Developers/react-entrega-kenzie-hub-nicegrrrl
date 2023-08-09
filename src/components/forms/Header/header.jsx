import { useNavigate } from "react-router-dom";

export const Header = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    localStorage.removeItem("@kenzieHub:token");
    setUser({});
    navigate("/");
  };

  return (
    <header>
      <div>
        <h2>Kenzie Hub</h2>
        <button onClick={handleLogoutButtonClick}>Sair</button>
      </div>
    </header>
  );
};

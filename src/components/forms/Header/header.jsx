import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    localStorage.removeItem("@kenzieHub:token");
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

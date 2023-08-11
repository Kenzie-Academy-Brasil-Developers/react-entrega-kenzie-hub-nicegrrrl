import { useNavigate } from "react-router-dom";
import logo from "../../../assets/mainLogo.svg";
import styles from "./style.module.scss";

export const Header = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    localStorage.removeItem("@kenzieHub:token");
    setUser(null);
    navigate("/");
  };

  return (
    <header className={styles.headerBox}>
      <div className="container">
        <div className={styles.headerElements}>
          <img className={styles.logo} src={logo} alt="logo kenzie hub" />
          <button className="buttonMedium" onClick={handleLogoutButtonClick}>
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};

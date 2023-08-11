import { Link } from "react-router-dom";
import gif from "../../assets/sad.gif";
import styles from "./style.module.scss";

export const ErrorPage = () => {
  return (
    <>
      <div className="container small">
        <div className={`${styles.box}`}>
          <img src={gif} alt="" />
          <h2 className="title2">Página não encontrada 💔</h2>
          <Link to="/" className="paragraph gray">
            Ir para página inicial 🏃🏻‍♂️
          </Link>
        </div>
      </div>
    </>
  );
};

import { TechList } from "../../TechList/techList";
import { BiPlus } from "react-icons/bi";
import styles from "./style.module.scss";
import { useTechContext } from "../../../providers/TechContext/techContext";

export const TechListSection = () => {
  const { setCreateTech } = useTechContext();

  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <h3 className="title2">Tecnologias </h3>
          <button
            className="buttonMedium thin"
            aria-label="add new tech"
            onClick={() => setCreateTech(true)}
          >
            <BiPlus size={18} />
          </button>
        </div>
        <TechList />
      </div>
    </section>
  );
};

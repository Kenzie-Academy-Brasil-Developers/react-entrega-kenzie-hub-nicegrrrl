import { TechList } from "../../TechList/techList";
import { BiPlus } from "react-icons/bi";
import styles from "./style.module.scss";

export const TechListSection = () => {
  return (
    <section>
      <div className="container">
        {/* <div className={styles.pageContentSectionElements}>
          <p className="title1">Que pena! Estamos em desenvolvimento ☹️</p>
          <p className="paragraph">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div> */}
        <div className={styles.flexBox}>
          <h3 className="title2">Tecnologias </h3>
          <button className="buttonMedium thin" aria-label="add">
            <BiPlus size={18} />
          </button>
        </div>
        <TechList />
      </div>
    </section>
  );
};

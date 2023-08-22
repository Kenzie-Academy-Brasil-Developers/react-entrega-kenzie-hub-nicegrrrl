import { FiEdit2, FiTrash2 } from "react-icons/fi";
import styles from "./style.module.scss";

export const TechCard = ({ tech }) => {
  return (
    <li>
      <div className={styles.listItemContent}>
        <p className="title2">{tech.title}</p>
        <div className={styles.info}>
          <span className="headline gray">{tech.status}</span>
          <button>
            <FiEdit2 size={15} />
          </button>
          <button>
            <FiTrash2 size={15} />
          </button>
        </div>
      </div>
    </li>
  );
};

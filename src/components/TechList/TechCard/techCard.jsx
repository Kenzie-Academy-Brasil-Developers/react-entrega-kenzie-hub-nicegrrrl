import { FiEdit2, FiTrash2 } from "react-icons/fi";
import styles from "./style.module.scss";
import { useTechContext } from "../../../providers/TechContext/techContext";

export const TechCard = ({ tech }) => {
  const { setEditingTech, deleteTaskRequest } = useTechContext();

  return (
    <li>
      <div className={styles.listItemContent}>
        <p className="title2">{tech.title}</p>
        <div className={styles.info}>
          <span className="headline gray">{tech.status}</span>
          <button aria-label="edit tech" onClick={() => setEditingTech(tech)}>
            <FiEdit2 size={15} />
          </button>
          <button
            aria-label="delete tech"
            onClick={() => deleteTaskRequest(tech.id)}
          >
            <FiTrash2 size={15} />
          </button>
        </div>
      </div>
    </li>
  );
};

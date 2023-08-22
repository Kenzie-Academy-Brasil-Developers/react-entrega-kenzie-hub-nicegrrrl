import { useTechContext } from "../../../providers/TechContext/techContext";
import { Input } from "../../forms/Input/input";
import { Select } from "../../forms/Select/select";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./style.module.scss";

export const CreateTechModal = () => {
  const { setCreateTech } = useTechContext();

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className="title2">Cadastrar tecnologia</h2>
          <button onClick={() => setCreateTech(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <form className={styles.modalContent}>
          <Input label="Nome" type="text" />
          <Select label="Selecionar status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button className="buttonPrimary " type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};

import { useTechContext } from "../../../providers/TechContext/techContext";
import { Input } from "../../forms/Input/input";
import { Select } from "../../forms/Select/select";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";

export const EditTechModal = () => {
  const { editingTech, setEditingTech, updateTechRequest } = useTechContext();

  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submit = (formData) => {
    updateTechRequest(formData);
  };

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className="title2">Tecnologia Detalhes</h2>
          <button aria-label="close" onClick={() => setEditingTech(null)}>
            <AiOutlineClose />
          </button>
        </div>
        <form className={styles.modalContent} onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            disabled={true}
            {...register("title")}
          />
          <Select label="Selecionar status" register={register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button className="buttonPrimary negative" type="submit">
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};

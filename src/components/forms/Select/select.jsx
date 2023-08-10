import styles from "./style.module.scss";

export const Select = ({ label, id, children, register }) => {
  return (
    <div className={styles.selectField}>
      <label htmlFor={id}>{label}</label>
      <select className="select" id={id} {...register}>
        {children}
      </select>
    </div>
  );
};

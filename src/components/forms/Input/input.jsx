import styles from "./style.module.scss";

// export const Input = ({ label, ...rest }) => {
//   return (
//     <div {...rest}>
//       <label htmlFor={id}>{label}</label>
//       <input type={type} id={id} placeholder={placeholder} />
//     </div>
//   );
// };

export const Input = ({ label, type, id, placeholder, register, error }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        className="input paragraph"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {error ? <p className="headline red">{error.message}</p> : null}
    </div>
  );
};

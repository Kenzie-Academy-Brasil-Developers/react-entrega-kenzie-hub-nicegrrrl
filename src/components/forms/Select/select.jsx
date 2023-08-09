export const Select = ({ label, id, children, register }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register}>
        {children}
      </select>
    </div>
  );
};

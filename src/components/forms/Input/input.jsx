// export const Input = ({ ...rest }) => {
//   return (
//     <div {...rest}>
//       <label htmlFor={id}>{label}</label>
//       <input type={type} id={id} placeholder={placeholder} />
//     </div>
//   );
// };

export const Input = ({ label, type, id, placeholder, required }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

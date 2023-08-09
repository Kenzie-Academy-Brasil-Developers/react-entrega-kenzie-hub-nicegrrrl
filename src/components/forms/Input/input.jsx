// export const Input = ({ label, ...rest }) => {
//   return (
//     <div {...rest}>
//       <label htmlFor={id}>{label}</label>
//       <input type={type} id={id} placeholder={placeholder} />
//     </div>
//   );
// };

export const Input = ({ label, type, id, placeholder, register }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
    </div>
  );
};

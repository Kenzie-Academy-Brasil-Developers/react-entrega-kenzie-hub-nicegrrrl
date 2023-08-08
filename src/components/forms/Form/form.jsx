// export const Form = ({ children, ...rest }) => {
//   return (
//     <form {...rest}>
//       <div>
//         <div>
//           <h2>{title}</h2>
//           {text !== "" ? <span>{text}</span> : null}
//         </div>
//         <div>{children}</div>
//       </div>
//     </form>
//   );
// };

export const Form = ({ children, title, text }) => {
  return (
    <form>
      <div>
        <h2>{title}</h2>
        {text !== "" ? <span>{text}</span> : null}
      </div>
      <div>{children}</div>
    </form>
  );
};

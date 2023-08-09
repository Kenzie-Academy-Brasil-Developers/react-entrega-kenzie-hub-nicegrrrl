import { Header } from "../../components/forms/Header/header";

export const DefaultTemplate = ({ children, setUser }) => {
  return (
    <>
      <Header setUser={setUser} />
      {children}
    </>
  );
};

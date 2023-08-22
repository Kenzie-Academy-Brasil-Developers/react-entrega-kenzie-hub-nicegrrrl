import { CreateTechModal } from "../../components/modal/CreateTechModal/createTechModal.jsx";
import { TechListSection } from "../../components/sections/TechListSection/techListSection.jsx";
import { UserSection } from "../../components/sections/UserSection/userSection.jsx";
import { useTechContext } from "../../providers/TechContext/techContext.jsx";
import { useUserContext } from "../../providers/UserContext/userContext.jsx";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
// import styles from "./style.module.scss";

export const DashboardPage = () => {
  // const { setUser } = useUserContext();

  const { createTech } = useTechContext();

  return (
    <>
      {/* <DefaultTemplate setUser={setUser}> */}
      <DefaultTemplate>
        <UserSection />
        <TechListSection />
        {createTech ? <CreateTechModal /> : null}
      </DefaultTemplate>
    </>
  );
};

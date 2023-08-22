import { CreateTechModal } from "../../components/modal/CreateTechModal/createTechModal.jsx";
import { EditTechModal } from "../../components/modal/EditTechModal/editTechModal.jsx";
import { TechListSection } from "../../components/sections/TechListSection/techListSection.jsx";
import { UserSection } from "../../components/sections/UserSection/userSection.jsx";
import { useTechContext } from "../../providers/TechContext/techContext.jsx";
import { useUserContext } from "../../providers/UserContext/userContext.jsx";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
// import styles from "./style.module.scss";

export const DashboardPage = () => {
  // const { setUser } = useUserContext();

  const { createTech, editingTech } = useTechContext();

  return (
    <>
      {/* <DefaultTemplate setUser={setUser}> */}
      <DefaultTemplate>
        <UserSection />
        <TechListSection />
        {createTech ? <CreateTechModal /> : null}
        {editingTech ? <EditTechModal /> : null}
      </DefaultTemplate>
    </>
  );
};

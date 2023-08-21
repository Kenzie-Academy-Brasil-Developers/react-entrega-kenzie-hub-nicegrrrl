import { TechListSection } from "../../components/sections/TechListSection/techListSection.jsx";
import { UserSection } from "../../components/sections/UserSection/userSection.jsx";
import { useUserContext } from "../../providers/UserContext/userContext.jsx";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
// import styles from "./style.module.scss";

export const DashboardPage = () => {
  // const { setUser } = useUserContext();

  return (
    <>
      {/* <DefaultTemplate setUser={setUser}> */}
      <DefaultTemplate>
        <UserSection />
        <TechListSection />
      </DefaultTemplate>
    </>
  );
};

import { useUserContext } from "../../providers/UserContext/userContext.jsx";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import styles from "./style.module.scss";

export const DashboardPage = () => {
  const { user, setUser } = useUserContext();

  return (
    <>
      <DefaultTemplate setUser={setUser}>
        <section className={styles.userSection}>
          <div className="container">
            <div className={styles.userSectionElements}>
              <span className="text1">Olá, {user?.name}</span>
              <span className="headline gray">{user?.course_module}</span>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.pageContentSectionElements}>
              <p className="title1">Que pena! Estamos em desenvolvimento ☹️</p>
              <p className="paragraph">
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};

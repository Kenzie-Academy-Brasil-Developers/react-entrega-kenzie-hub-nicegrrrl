import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";

export const DashboardPage = ({ user, setUser }) => {
  return (
    <>
      <DefaultTemplate setUser={setUser}>
        <section>
          <div>
            <span>Olá, {user?.name}</span>
            <span>{user?.course_module}</span>
          </div>
        </section>
        <section>
          <div>
            <p>Que pena! Estamos em desenvolvimento ☹️</p>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};

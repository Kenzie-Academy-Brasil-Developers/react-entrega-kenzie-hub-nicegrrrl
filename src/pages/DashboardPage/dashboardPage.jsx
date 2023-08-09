import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";

export const DashboardPage = () => {
  return (
    <>
      <DefaultTemplate>
        <section>
          <div>
            <span>Olá, Samuel Leão</span>
            <span>Primeiro módulo (Introdução ao Frontend)</span>
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

import { Form } from "../../components/forms/Form/form";
import { Input } from "../../components/forms/Input/input";

export const LoginPage = () => {
  return (
    <>
      <h1>Kenzie Hub</h1>
      <Form title="Login" text="">
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Digite seu email"
          required={true}
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          required={true}
        />
        <button>Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <button>Cadastre-se</button>
      </Form>
    </>
  );
};

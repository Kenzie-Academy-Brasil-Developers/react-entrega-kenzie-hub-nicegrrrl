import { Link } from "react-router-dom";
import { Form } from "../../components/forms/Form/form";
import { Input } from "../../components/forms/Input/input";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <h1>Kenzie Hub</h1>
      <Form title="Login" text="" handleSubmit={handleSubmit} submit={submit}>
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Digite seu email"
          register={register("email")}
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          register={register("password")}
        />
        {/* <Link to="/dashboard"> */}
        <button type="submit">Entrar</button>
        {/* </Link> */}
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">
          <button>Cadastre-se</button>
        </Link>
      </Form>
    </>
  );
};

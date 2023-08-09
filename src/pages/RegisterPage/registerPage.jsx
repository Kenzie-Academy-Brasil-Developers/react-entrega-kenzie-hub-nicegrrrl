import { useForm } from "react-hook-form";
import { Form } from "../../components/forms/Form/form";
import { toast } from "react-toastify";
import { Input } from "../../components/forms/Input/input";
import { Select } from "../../components/forms/Select/select";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    console.log(formData);
    toast.success("Cadastro realizado com sucesso 🎉");
  };

  return (
    <>
      <h1>Register</h1>
      <Form
        title="Crie sua conta"
        text="Rápido e grátis, vamos nessa!"
        handleSubmit={handleSubmit}
        submit={submit}
      >
        <Input
          label="Nome"
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          register={register("name")}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          register={register("email")}
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          register={register("password")}
        />
        <Input
          label="Confirmar senha"
          type="password"
          id="password"
          placeholder="Digite novamente sua senha"
          register={register("confirmPassword")}
        />
        <Input
          label="Bio"
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          register={register("bio")}
        />
        <Input
          label="Contato"
          type="text"
          id="contact"
          placeholder="Opção de contato"
          register={register("contact")}
        />
        <Select label="Selecionar módulo" register={register("module")}>
          <option value="" selected disabled>
            Selecione um módulo
          </option>
          <option value="firstModule">Primeiro Módulo</option>
          <option value="secondModule">Segundo Módulo</option>
          <option value="thirdModule">Terceiro Módulo</option>
          <option value="fourthModule">Quarto Módulo</option>
          <option value="fifthModule">Quinto Módulo</option>
          <option value="sixthModule">Sexto Módulo</option>
        </Select>
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

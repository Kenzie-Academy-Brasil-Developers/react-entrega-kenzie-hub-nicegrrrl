import { useForm } from "react-hook-form";
import { Form } from "../../components/forms/Form/form";
import { toast } from "react-toastify";
import { Input } from "../../components/forms/Input/input";
import { Select } from "../../components/forms/Select/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { api } from "../../services/api.js";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerFormSchema) });

  const navigate = useNavigate();

  const userRegisterRequest = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      console.log(data);
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  const submit = (formData) => {
    userRegisterRequest(formData);
    toast.success("Cadastro realizado com sucesso 🎉");
  };

  return (
    <>
      <main className="pageBox">
        <div className="container small">
          <div className={styles.registerFormTop}>
            <img src={logo} alt="kenzie hub logo" />
            <Link to="/" className="buttonBack">
              Voltar
            </Link>
          </div>
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
            {errors.name ? <p>{errors.name.message}</p> : null}
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="Digite aqui seu email"
              register={register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : null}
            <Input
              label="Senha"
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              register={register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : null}
            <Input
              label="Confirmar senha"
              type="password"
              id="password"
              placeholder="Digite novamente sua senha"
              register={register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <p>{errors.confirmPassword.message}</p>
            ) : null}
            <Input
              label="Bio"
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              register={register("bio")}
            />
            {errors.bio ? <p>{errors.bio.message}</p> : null}
            <Input
              label="Contato"
              type="text"
              id="contact"
              placeholder="Opção de contato"
              register={register("contact")}
            />
            {errors.contact ? <p>{errors.contact.message}</p> : null}
            <Select
              label="Selecionar módulo"
              register={register("course_module")}
            >
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
            {errors.course_module ? (
              <p>{errors.course_module.message}</p>
            ) : null}
            <button className="buttonPrimary negative" type="submit">
              Cadastrar
            </button>
          </Form>
        </div>
      </main>
    </>
  );
};

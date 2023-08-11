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
            <Link to="/" className="buttonMedium">
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
              {...register("name")}
              error={errors.name}
            />
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
              error={errors.email}
            />
            <Input
              label="Senha"
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
              error={errors.password}
            />
            <Input
              label="Confirmar senha"
              type="password"
              id="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
              error={errors.confirmPassword}
            />
            <Input
              label="Bio"
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
              error={errors.bio}
            />
            <Input
              label="Contato"
              type="text"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
              error={errors.contact}
            />
            <Select
              label="Selecionar módulo"
              register={register("course_module")}
              error={errors.course_module}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </Select>
            <button className="buttonPrimary negative" type="submit">
              Cadastrar
            </button>
          </Form>
        </div>
      </main>
    </>
  );
};

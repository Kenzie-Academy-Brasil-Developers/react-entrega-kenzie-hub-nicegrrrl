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
import { InputPassword } from "../../components/forms/InputPassword/inputPassword";
import { useState } from "react";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerFormSchema) });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userRegisterRequest = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/users", formData);
      navigate("/");
      toast.success("Cadastro realizado com sucesso 🎉");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("Este email já foi cadastrado 😅");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    userRegisterRequest(formData);
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
              disabled={loading}
              {...register("name")}
              error={errors.name}
            />
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="Digite aqui seu email"
              disabled={loading}
              {...register("email")}
              error={errors.email}
            />
            <InputPassword
              label="Senha"
              id="password"
              placeholder="Digite aqui sua senha"
              disabled={loading}
              {...register("password")}
              error={errors.password}
            />
            <InputPassword
              label="Confirmar senha"
              id="password"
              placeholder="Digite novamente sua senha"
              disabled={loading}
              {...register("confirmPassword")}
              error={errors.confirmPassword}
            />
            <Input
              label="Bio"
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              disabled={loading}
              {...register("bio")}
              error={errors.bio}
            />
            <Input
              label="Contato"
              type="text"
              id="contact"
              placeholder="Opção de contato"
              disabled={loading}
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

            <button
              className="buttonPrimary negative"
              type="submit"
              disabled={loading}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </Form>
        </div>
      </main>
    </>
  );
};

import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/forms/Form/form";
import { Input } from "../../components/forms/Input/input";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  // const [user, setUser] = useState(null);
  // console.log(user);

  const navigate = useNavigate();

  const userLoginRequest = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      console.log(data);
      console.log(data.user);
      // const currentUser = data.user;
      // setUser(data.user);
      // setUser("usuário");
      localStorage.setItem("@kenzieHub:token", data.token);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error);
    }
  };

  const submit = (formData) => {
    userLoginRequest(formData);
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
        {errors.email ? <p>{errors.email.message}</p> : null}
        <Input
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          register={register("password")}
        />
        {errors.password ? <p>{errors.password.message}</p> : null}

        <button type="submit">Entrar</button>
        <Link to="/register">
          <p>Ainda não possui uma conta?</p>
          <button>Cadastre-se</button>
        </Link>
      </Form>
    </>
  );
};

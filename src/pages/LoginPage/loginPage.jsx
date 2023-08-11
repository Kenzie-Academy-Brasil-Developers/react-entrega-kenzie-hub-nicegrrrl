import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/forms/Form/form";
import { Input } from "../../components/forms/Input/input";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
import logo from "../../assets/mainLogo.svg";
import styles from "./style.module.scss";
import { InputPassword } from "../../components/forms/InputPassword/inputPassword";
import { useState } from "react";

export const LoginPage = ({ user, setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userLoginRequest = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@kenzieHub:token", data.token);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Email ou senha não correspondem 😅");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    userLoginRequest(formData);
  };

  return (
    <>
      <main className="pageBox">
        <div className="container small">
          <div className={styles.logo}>
            <img src={logo} alt="kenzie hub logo" />
          </div>
          <div>
            <Form
              title="Login"
              text=""
              handleSubmit={handleSubmit}
              submit={submit}
            >
              <Input
                label="Email"
                type="email"
                id="email"
                placeholder="Digite seu email"
                {...register("email")}
                disabled={loading}
                error={errors.email}
              />
              <InputPassword
                label="Senha"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
                disabled={loading}
                error={errors.password}
              />
              <button
                type="submit"
                className="buttonPrimary"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
              <Link to="/register" className="headline bold center gray">
                Ainda não possui uma conta?
              </Link>
              <Link to="/register" className="buttonPrimary disabled">
                Cadastre-se
              </Link>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
};

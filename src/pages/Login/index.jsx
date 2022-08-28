import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { Container } from "./styles";
import api from "../../Services/api";
import { ButtonPrimary, ButtonSecondary, Input } from "../../styles/Global";
import { setUser } from "../../store/modules/user/actions";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  if (localStorage.getItem("token")) {
    const user = JSON.parse(localStorage.getItem("user"));

    history.push(`/home/${user.name}`);
  }
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const Formschema = yup.object().shape({
    email: yup.string().email("Insira um email valido"),

    password: yup
      .string()
      .required("Insira a sua senha")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Formschema) });

  const dispatch = useDispatch();
  const signUp = (data) => {
    if (!localStorage.getItem("token")) {
      api
        .post("/sessions", data)
        .then((response) => {
          const user = response.data.user.name
            .split(" ")
            .join("-")
            .toLowerCase();

          localStorage.setItem("token", response.data.token);

          dispatch(setUser(response.data.user));
          localStorage.setItem("user", JSON.stringify(response.data.user));

          toast.success("Entrada autorizada");

          setTimeout(() => history.push(`/home/${user}`), 2500);
        })
        .catch((error) => {
          toast.error("Ops! Email ou senha incorretos jovem Lex!");
        });
    } else {
      toast.info("Você já fez o login xD");
    }
  };

  function handleClickRegister() {
    history.push("/register");
  }

  return (
    <Container>
      <h1>Hero's to-do</h1>
      <div className="containerLogin">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(signUp)}>
          <label>
            Email
            <Input
              {...register("email")}
              type="email"
              placeholder="Digite aqui seu email"
            />
            <span>{errors.email?.message}</span>
          </label>
          <label>
            Senha
            <div className="inputPassword">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Digite aqui sua senha"
              />
              {showPassword ? (
                <AiFillEyeInvisible onClick={handleShowPassword} />
              ) : (
                <AiFillEye onClick={handleShowPassword} />
              )}
            </div>
            <span>{errors.password?.message}</span>
          </label>
          <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        </form>

        <p>Ainda não possui uma conta?</p>
        <ButtonSecondary width="90%" onClick={handleClickRegister}>
          Cadastre-se
        </ButtonSecondary>
      </div>
    </Container>
  );
};

export default Login;

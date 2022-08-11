import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ButtonPrimary, Input } from "../../styles/Global";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import api from "../../Services/api";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentModule, setCurrentModule] = useState("M1");
  const [showModules, setShowModules] = useState(false);
  const [buttonTogle, setButtonTogle] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (showModules) {
      const modules = document.querySelector(".modules");
      modules.classList.add("modules-Open");
    }
  }, [showModules]);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleShowModules() {
    if (showModules) {
      const modules = document.querySelector(".modules");
      modules.classList.remove("modules-Open");
      modules.classList.add("modules-Close");

      setTimeout(() => setShowModules(!showModules), 600);
    } else {
      setShowModules(!showModules);
    }
  }

  function handleSelectModule(e) {
    setCurrentModule(e.target.innerText);
    const modules = document.querySelector(".modules");
    modules.classList.remove("modules-Open");
    modules.classList.add("modules-Close");
    setTimeout(() => setShowModules(false), 600);
  }

  const Formschema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatótio")
      .max(20, "Máximo 20 caracteres"),

    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais."),

    bio: yup.string().required("Campo obrigatório"),

    contact: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(Formschema) });

  const signUp = (data) => {
    data.course_module = currentModule;
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Usuario cadastrado com sucesso");
        setTimeout(() => {
          history.push("/");
        });
      })
      .catch((error) => {
        toast.error("Verifique todos os campos");
      });
  };

  function handleChange() {
    const { name, email, password, confirmPassword, bio, contact } =
      getValues();
    if (name && email && password && confirmPassword && bio && contact) {
      setButtonTogle(false);
    } else {
      setButtonTogle(true);
    }
  }

  return (
    <Container>
      <div className="headerRegister">
        <h1>Kenzie Hub</h1>
        <button className="btnBack" onClick={() => history.goBack()}>
          {" "}
          {/* levará de volta ao histórico do navegador antes*/}
          Voltar
        </button>
      </div>
      <div className="containerRegister">
        <div className="topRegister">
          <h2>Crie sua Conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <form onSubmit={handleSubmit(signUp)} onChange={handleChange}>
          <label>
            Nome
            <Input
              {...register("name")}
              type="text"
              placeholder="Digite aqui seu nome"
            />
            <span>{errors.name?.message}</span>
          </label>
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
                <AiFillEyeInvisible
                  className="svgPassword"
                  onClick={handleShowPassword}
                />
              ) : (
                <AiFillEye
                  className="svgPassword"
                  onClick={handleShowPassword}
                />
              )}
            </div>
            <span>{errors.password?.message}</span>
          </label>
          <label>
            Confirmar Senha
            <Input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirme a sua senha"
            />
            <span>{errors.confirmPassword?.message}</span>
          </label>
          <label>
            Bio
            <Input
              {...register("bio")}
              type="text"
              placeholder="Fale sobre você"
            />
            <span>{errors.bio?.message}</span>
          </label>
          <label>
            Contato
            <Input
              {...register("contact")}
              type="text"
              placeholder="Opção de contato"
            />
            <span>{errors.contact?.message}</span>
          </label>
          <label>
            Selecionar módulo
            <ul>
              <li className="selectModule">
                {currentModule}
                {showModules ? (
                  <FaAngleUp onClick={handleShowModules} />
                ) : (
                  <FaAngleDown onClick={handleShowModules} />
                )}
              </li>
              {showModules && (
                <div className="modules">
                  <li onClick={handleSelectModule}>M1</li>
                  <li onClick={handleSelectModule}>M2</li>
                  <li onClick={handleSelectModule}>M3</li>
                  <li onClick={handleSelectModule}>M4</li>
                  <li onClick={handleSelectModule}>M5</li>
                  <li onClick={handleSelectModule}>M6</li>
                </div>
              )}
            </ul>
          </label>
          <ButtonPrimary type="submit" disabled={buttonTogle}>
            Registrar
          </ButtonPrimary>
        </form>
      </div>
    </Container>
  );
};

export default Register;

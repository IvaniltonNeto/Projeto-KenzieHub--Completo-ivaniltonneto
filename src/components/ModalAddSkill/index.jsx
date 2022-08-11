import React, { useState } from "react";
import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";
import { ButtonPrimary, Input } from "../../styles/Global";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Services/api";
import { toast } from "react-toastify";

const ModalAddSkill = ({ setModalTech }) => {
  const [showModules, setShowModules] = useState(false);
  const [currentModule, setCurrentModule] = useState("Aquaman");

  function handleShowModules() {
    setShowModules(!showModules);
  }

  function handleSelectModule(e) {
    setCurrentModule(e.target.innerText);
    setShowModules(false);
  }

  function handleCloseModal() {
    setModalTech(false);
  }

  const schema = yup.object().shape({
    title: yup.string().required("Insira o nome da tecnologia"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    data.status = currentModule;
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia adicionada com sucesso");
        setShowModules(false);
      })
      .catch((error) => {
        toast.error("Ops! Algo de errado não está certo");
      });

    setTimeout(() => {
      setModalTech(false);
    }, 500);
  };

  return (
    <Container>
      <section>
        <div>
          <h2>Cadastrar Tecnologia</h2>

          <button onClick={handleCloseModal}>
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome
            <Input {...register("title")} placeholder="Nome da Tecnologia" />
            <span>{errors.title?.message}</span>
          </label>
          <label>
            Selecione o nível
            <ul>
              <li className="selectLevel">
                {currentModule}
                {showModules ? (
                  <FaAngleUp onClick={handleShowModules} />
                ) : (
                  <FaAngleDown onClick={handleShowModules} />
                )}
              </li>
              {showModules && (
                <div className="level">
                  <li onClick={handleSelectModule}>Aquaman</li>
                  <li onClick={handleSelectModule}>Flash</li>
                  <li onClick={handleSelectModule}>Mulher Maravilha</li>
                  <li onClick={handleSelectModule}>Superman</li>
                  <li onClick={handleSelectModule}>Batman</li>
                  <li onClick={handleSelectModule}>+ de 8000</li>
                </div>
              )}
            </ul>
          </label>
          <ButtonPrimary type="submit">Cadastrar Tecnologia</ButtonPrimary>
        </form>
      </section>
    </Container>
  );
};

export default ModalAddSkill;

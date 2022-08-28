import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import { ButtonPrimary, ButtonSecondary, Input } from "../../styles/Global";
import api from "../../Services/api";
import { Container } from "./styles";

const ModalEditSkill = ({ setModalEditSkill, tech }) => {
  const [showModules, setShowModules] = useState(false);
  const [currentModule, setCurrentModule] = useState("Aquaman");

  useEffect(() => {
    setCurrentModule(tech.status);
  }, []);

  function handleShowModules() {
    setShowModules(!showModules);
  }

  function handleSelectModule(e) {
    setCurrentModule(e.target.innerText);
    setShowModules(false);
  }

  function handleCloseModal() {
    setModalEditSkill(false);
  }

  const onSubmit = (data) => {
    data.preventDefault();
    const status = { status: currentModule };

    api
      .put(`/users/techs/${tech.id}`, status, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia atualizada com sucesso");
        setShowModules(false);
      })
      .catch((error) => {
        toast.error("Ops! Algo de errado não está certo");
      });

    setTimeout(() => {
      setModalEditSkill(false);
    }, 500);
  };

  function handleDelete() {
    api
      .delete(`/users/techs/${tech.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        toast.success("Tarefa erradicada com sucesso");
        setShowModules(false);
      })
      .catch((error) => {
        toast.error("Erro ao erradicar tarefa");
      });

    setTimeout(() => {
      setModalEditSkill(false);
    }, 500);
  }

  return (
    <Container>
      <section>
        <div className="newTech">
          <h2>Detalhes</h2>

          <button onClick={handleCloseModal}>
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <label>
            Nome
            <Input value={tech.title} readOnly />
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
                  <li onClick={handleSelectModule}>Concluido</li>
                </div>
              )}
            </ul>
          </label>
          <div className="containerButton">
            <ButtonPrimary className="btnEdit" type="submit">
              Salvar alterações
            </ButtonPrimary>
            <ButtonSecondary
              type="button"
              className="btnDelete"
              onClick={handleDelete}
            >
              Excluir
            </ButtonSecondary>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default ModalEditSkill;

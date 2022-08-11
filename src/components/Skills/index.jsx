import React, { useState } from "react";
import { Container } from "./styles";
import ModalEditSkill from "../ModalEditSkill";

const Skills = ({ tech, setTechs }) => {
  const [modalEditSkill, setModalEditSkill] = useState(false);

  function handleOpenModal() {
    setModalEditSkill(!modalEditSkill);
  }

  return (
    <Container>
      {modalEditSkill && (
        <ModalEditSkill setModalEditSkill={setModalEditSkill} tech={tech} />
      )}
      <div onClick={handleOpenModal}>
        <h2>{tech.title}</h2>
        <p>{tech.status}</p>
      </div>
    </Container>
  );
};

export default Skills;

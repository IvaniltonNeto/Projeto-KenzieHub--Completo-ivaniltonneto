import React from "react";

import { Container } from "./styles";
import Skills from "../../components/Skills";

const ContainerSkills = ({ techs, setTechs }) => {
  return (
    <Container>
      {techs.length > 0 ? (
        techs.map((tech) => (
          <Skills key={tech.id} tech={tech} setTechs={setTechs} />
        ))
      ) : (
        <div className="containerNoTechs">
          <h2>O tambor faz muito barulho mas é vazio por dentro.</h2>
          <p>Não seja como o tambor, adicione alguma tecnologia</p>
        </div>
      )}
    </Container>
  );
};

export default ContainerSkills;

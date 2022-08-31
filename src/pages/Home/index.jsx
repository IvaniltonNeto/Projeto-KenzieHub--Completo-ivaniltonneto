import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { GoPlus } from "react-icons/go";

import { logout, setUser } from "../../store/modules/user/actions";
import { Container } from "./styles";
import ContainerSkills from "../../components/ContainerSkills";
import ModalAddSkill from "../../components/ModalAddSkill";
import api from "../../Services/api";

const Home = () => {
  const [modalTech, setModalTech] = useState(false);
  const [techs, setTechs] = useState([]);
  const [isLogged, setIsLogged] = useState(true);

  const user = useSelector(({ user }) => user.user);

  const dispatch = useDispatch();

  const history = useHistory();

  const userLoggedIn = localStorage.getItem("user");

  useEffect(() => {
    if (isLogged && !localStorage.getItem("token")) {
      toast.error("Entre com o login");
      setTimeout(() => history.push("/"), 5000);
    }

    if (isLogged) {
      api.get(`/users/${JSON.parse(userLoggedIn).id}`).then((response) => {
        dispatch(setUser(response.data));
        setTechs(response.data.techs);
        localStorage.setItem("user", JSON.stringify(response.data));
      });
    }

    if (!user) {
      dispatch(setUser(JSON.parse(userLoggedIn)));
    }
  }, [user, history, dispatch, isLogged, userLoggedIn]);

  function handleAddSkill() {
    setModalTech(!modalTech);
  }

  function handleLogout() {
    toast.success("Você saiu!");
    setIsLogged(false);
    setTimeout(() => {
      history.push("/");
      localStorage.clear();
      dispatch(logout());
    }, 2500);
  }

  return (
    <Container>
      {user ? (
        <>
          {modalTech && <ModalAddSkill setModalTech={setModalTech} />}
          <header className="headerHome">
            <div>
              <h1>Hero's to-do</h1>
              <button className="btnLogout" onClick={handleLogout}>
                Sair
              </button>
            </div>
          </header>
          <section className="containerUser">
            <div>
              <h2>Olá, Super {user.name}</h2>
              <p>Especialista nível: {user.course_module}</p>
            </div>
          </section>
          <main>
            <header>
              <h3>Tarefas</h3>
              <button className="btnAdd" onClick={handleAddSkill}>
                <GoPlus />
              </button>
            </header>
            <ContainerSkills techs={techs} setTechs={setTechs} />
          </main>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default Home;

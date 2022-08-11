import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
  max-width: 370px;

  h1 {
    font-weight: 700;
    font-size: 16px;
    color: var(--primary);
  }
  h2 {
    font-weight: 700;
    font-size: 14.439px;
    line-height: 22px;
  }
  .containerRegister {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 46px;
    justify-content: space-between;

    background-color: var(--gray3);
    border-radius: 3px;
    padding: 20px 0;
  }
  form {
    gap: 15px;
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  label {
    font-size: 10px;

    display: flex;
    flex-direction: column;

    gap: 12px;
  }
  .inputPassword {
    position: relative;
  }
  .btnBack {
    background: #212529;
    border-radius: 4px;
    border: none;
    color: var(--gray0);
    font-size: 10px;
    font-weight: 600;
    width: 80px;
    height: 32px;
    &:hover {
      background: var(--gray2);
    }
  }
  .svgPassword {
    color: var(--gray1);
    font-size: 20px;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
  }
  .selectModule {
    position: relative;
    width: 100%;
  }
  .selectModule svg {
    color: var(--gray1);
    font-size: 15px;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
  }
  .modules {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px;
    height: 100px;
    overflow-y: auto;
  }
  .modules-Open {
    animation: modulesOpen 0.5s ease-in-out backwards;
  }
  .modules-Close {
    animation: modulesClose 0.5s ease-in-out forwards;
  }
  p {
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--gray1);
  }
  /* button[type="submit"] {
    margin-top: 20px;
  } */
  span {
    color: var(--toastify-color-error);
  }

  .headerRegister {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
  }

  .topRegister {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
  }

  li {
    display: flex;
    align-items: center;
    list-style: none;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;

    color: #fff;
    background: var(--gray2);
    border-radius: 4px;
    min-height: 38px;
    width: ${({ width }) => width || "95%"};
    border: none;
    padding: 0 14px;
    cursor: pointer;

    &:hover {
      background-color: var(--gray4);
    }
  }

  @media screen and (min-width: 980px) {
    h1 {
      font-size: 20px;
    }
    form {
      font-size: 16px;
    }
    input,
    button {
      font-size: 16px;
    }
  }

  @keyframes modulesOpen {
    from {
      clip-path: inset(0 0 100% 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  @keyframes modulesClose {
    from {
      clip-path: inset(0 0 0 0);
    }
    to {
      clip-path: inset(0 0 100% 0);
    }
  }
`;

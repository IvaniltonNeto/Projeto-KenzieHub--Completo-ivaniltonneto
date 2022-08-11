import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  section {
    max-width: 369px;
    height: 274px;
    max-height: 342px;
    width: 95%;
    background-color: var(--gray3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    padding: 0 10px;
  }
  section h2 {
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;
  }
  section .newTech button {
    border: none;
    background-color: transparent;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: var(--gray1);
    z-index: 100000;
  }

  section .newTech {
    display: flex;
    height: 40px;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--gray2);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
  }

  section form {
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 17px;
    position: absolute;
    bottom: 16px;
    width: 90%;
    right: 0;
    left: 0;
    margin: auto;
  }
  .selectModule {
    position: relative;
    width: 100%;
  }
  .selectLevel {
    position: relative;
    width: 100%;
  }
  .selectLevel svg {
    color: var(--gray1);
    font-size: 15px;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
  }
  .level {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px;
    height: 100px;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 99999999;
    background-color: var(--gray2);
  }
  label {
    font-size: 10px;

    display: flex;
    flex-direction: column;

    gap: 10px;
  }
  span {
    color: var(--toastify-color-error);
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
  .btnDelete {
    width: 78px;
  }
  .btnEdit {
    width: 163px;
  }
  .containerButton {
    background: transparent;
    padding: 0;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  @media screen and (min-width: 980px) {
    section h2 {
      font-size: 14px;
    }
    label {
      font-size: 12px;
    }
    li {
      font-size: 16px;
    }
  }
`;

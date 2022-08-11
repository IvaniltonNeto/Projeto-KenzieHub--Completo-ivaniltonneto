import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  max-width: 370px;
  h1 {
    font-weight: 700;
    font-size: 14px;
    color: var(--primary);
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 700;
    font-size: 14.439px;
    line-height: 22px;
  }
  .containerLogin {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;

    background-color: var(--gray3);
    border-radius: 3px;
    height: 400px;
    padding: 20px 0;
  }
  form {
    gap: 20px;
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

  svg {
    color: var(--gray1);
    font-size: 20px;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
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
`;

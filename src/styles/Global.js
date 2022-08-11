import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

#root{
--primary: #ff577f;
--primary-focus: #ff427f;
--primary-negative: #59323f;
--gray0: #f8f9fa;
--gray1: #868e96;
--gray2: #343841;
--gray3: #212529;
--gray4: #121214;
--toastify-color-light: #343841;
--toastify-color-success: #3fe864;
--toastify-color-error: #e83f58;
--toastify-text-color-light: #f8f9fa;


}
.Toastify__close-button--light{
  color: var(--gray1);
  
}
::-webkit-scrollbar {
    width: 8px;
    background-color: var(--gray3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray1);
    border-radius: 5px;
  }
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    transition: all 0.3s ease-in-out;
    color: #f8f9fa;
}
button{
    cursor: pointer;
}
html{
    width: 100vw;
    height: 100vh;
}
body{
  
    font-family: 'Inter';
    background: #121214;
    
}
`;

export const ButtonPrimary = styled.button`
  font-weight: 500;
  font-size: 12.8347px;
  line-height: 21px;

  background: var(--primary);
  color: white;
  height: 38.5px;
  width: ${({ width }) => width || "100%"};

  border: none;
  border-radius: 4px;

  &:hover {
    background: var(--primary-focus);
  }

  &:disabled {
    background: var(--primary-negative);
  }
`;

export const ButtonSecondary = styled.button`
  font-weight: 500;
  font-size: 12.8347px;
  line-height: 21px;

  background: var(--gray1);
  color: white;
  height: 38.5px;
  width: ${({ width }) => width || "100%"};

  border: none;
  border-radius: 4px;

  &:hover {
    background: var(--gray2);
  }
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 13.0293px;
  line-height: 21px;

  color: #fff;
  background: var(--gray2);
  border-radius: 4px;
  height: 38px;
  width: ${({ width }) => width || "100%"};
  border: none;
  padding: 0 14px;

  &:focus {
    border: 0.9772px solid var(--gray0);
  }
  &:focus::placeholder {
    color: #fff;
  }
`;

export default Global;

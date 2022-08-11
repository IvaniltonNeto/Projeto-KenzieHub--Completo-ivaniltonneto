import styled from "styled-components";

export const Container = styled.ul`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 0;
  gap: 16px;
  border-radius: 4px;
  background-color: var(--gray3);
  width: 95%;
  margin: 0 auto;

  .containerNoTechs {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    /*  position: absolute;
    inset: 0; */
  }
  .containerNoTechs p {
    font-size: 16px;
    color: var(--gray1);
  }
`;

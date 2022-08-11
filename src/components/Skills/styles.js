import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12.182px;
  gap: 12.18px;
  width: 95%;
  height: 48px;
  border-radius: 4px;
  background: var(--gray4);
  cursor: pointer;
  :hover {
    background-color: var(--gray2);
  }

  h2 {
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
  }
  p {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--gray1);
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

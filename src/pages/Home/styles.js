import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 20px;

  h1 {
    font-weight: 700;
    font-size: 16px;
    color: var(--primary);
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
  .containerUser {
    width: 100%;
    border-bottom: 1px solid var(--gray3);
    padding: 30px 0;
  }
  .containerUser h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  .containerUser p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray1);
  }
  .containerUser div {
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    max-width: 780px;
  }
  .btnLogout {
    background: #212529;
    border-radius: 4px;
    border: none;
    color: var(--gray0);
    font-size: 12px;
    font-weight: 600;
    width: 80px;
    height: 32px;
    &:hover {
      background: var(--gray2);
    }
  }

  .headerHome {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid var(--gray3);
  }
  .headerHome div {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 780px;
  }
  main {
    max-width: 780px;
    margin: 0 auto;
  }
  main header {
    width: 95%;
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
  }
  main header button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212529;
    border-radius: 4px;
    border: none;
    color: var(--gray0);
    font-size: 16px;
    font-weight: 600;
    width: 32px;
    height: 32px;
    &:hover {
      background: var(--gray2);
    }
  }
  @media screen and (min-width: 680px) {
    .containerUser div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media screen and (min-width: 680px) {
    main header,
    main ul {
      width: 100%;
    }
  }
  @media screen and (min-width: 980px) {
    h1 {
      font-size: 20px;
    }
    input,
    button {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1366px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 1600px) {
    margin-top: 50px;
  }
`;

import { styled } from "styled-components";

const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;

    font-size: 1rem;
    font-weight: 600;

    margin-top: 1rem;
  }

  input {
    height: 48px;

    border-radius: 8px;
    border: none;

    box-shadow: 5px 8px 10px 1px #d9d9d9;

    margin-top: 2rem;
  }

  input::placeholder {
    color: #6d6d6d;

    font-size: 0.9rem;
    font-weight: 600;

    padding: 0 1rem;
  }

  a {
    text-align: end;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    border: none;
    border-radius: 8px;

    margin-top: 2rem;
    margin-bottom: 1rem;

    width: 69%;
    height: 3rem;

    color: white;

    font-size: 1rem;
    font-weight: 700;

    background: linear-gradient(180deg, #131010 1.56%, rgba(0, 0, 0, 0.7) 100%),
      linear-gradient(0deg, #ffffff, #ffffff);
    box-shadow: -2px 4px 6px 2px #73737380;

    font-family: "Inter", sans-serif;
  }

  @media (min-width: 424px) {
    width: 80%;
  }

  @media (min-width: 500px) {
    width: 65%;
  }

  @media (min-width: 630px) {
    width: 50%;
  }

  @media (min-width: 865px) {
    width: 35%;
  }

  @media (min-width: 1023px) {
    width: 30%;
    margin-bottom: 12rem;

    a:hover {
      text-decoration: underline;
      color: black;
    }
  }

  @media (min-width: 1165px) {
    width: 25%;
  }

  @media (min-width: 1439px) {
    width: 26%;

    h2 {
      font-size: 1.3rem;
    }

    button {
      width: 55%;
      height: 4rem;

      font-size: 1.3rem;
    }

    input::placeholder {
      color: #6d6d6d;

      font-size: 1rem;
      font-weight: 600;

      padding: 0 1rem;
    }
  }
`;

export default StyledFormLogin;

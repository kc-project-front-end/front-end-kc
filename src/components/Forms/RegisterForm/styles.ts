import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h2 {
    text-align: center;

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
    color: #000000ab;

    font-size: 0.9rem;

    padding: 0 1rem;
  }

  p {
    margin-top: 0.5rem;
    color: red;
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

    margin-top: 1rem;
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
`;

export { StyledForm };

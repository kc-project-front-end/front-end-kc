import styled from "styled-components";

const StyledLogin = styled.main`
  margin-top: 6rem;
  padding: 0 2rem;

  div > img {
    display: none;
  }

  @media (min-width: 424px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1023px) {
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }

    div > img {
      display: flex;
    }
  }

  @media (min-width: 1165px) {
    div {
      gap: 5rem;
    }
  }

  @media (min-width: 1439px) {
    margin-top: 8rem;
  }
`;

export default StyledLogin;

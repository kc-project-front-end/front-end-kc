import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #343435;
  color: white;

  height: 82px;

  position: fixed;
  top: 0;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 0 2rem;
  }

  div > h2 {
    font-family: "Kumar One";
    font-size: 1rem;
  }

  @media (min-width: 500px) {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      padding: 0 4rem;
    }
  }

  @media (min-width: 630px) {
    div {
      padding: 0 6rem;
    }
    div > h2 {
      font-family: "Kumar One";
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1023px) {
    div {
      padding: 0 5rem;
    }
    div > h2 {
      font-family: "Kumar One";
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1165px) {
    div {
      padding: 0 9rem;
    }
  }

  @media (min-width: 1439px) {
    div {
      padding: 0 15rem;
    }
  }

  @media (min-width: 1504px) {
    div {
      padding: 0 16rem;
    }
  }
`;

const StyledMenuMobile = styled.nav`
  ul {
    position: relative;
    top: 75px;
    left: 25px;
    text-align: center;
  }

  ul > li {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #343435;
    border: 1px solid white;
    border-radius: 8px;
  }

  ul > li > a {
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;

const StyledMenuDesktop = styled.nav`
  display: none;

  @media (min-width: 1023px) {
    display: flex;

    ul {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    ul > li > a {
      font-size: 1.2rem;
    }

    ul > li > a:hover {
      text-decoration: underline;
      color: white;
    }
  }
`;

export { StyledHeader, StyledMenuMobile, StyledMenuDesktop };

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
`;

export { StyledHeader, StyledMenuMobile };

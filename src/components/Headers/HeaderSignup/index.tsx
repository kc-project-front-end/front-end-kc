import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledMenuMobile } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const HeaderSignup = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  const showMenu = () => {
    open == false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <StyledHeader>
      <div>
        <h2>K commerce</h2>

        <StyledMenuMobile>
          {open ? (
            <ul>
              <AiOutlineClose
                onClick={() => showMenu()}
                size="2rem"
                color="white"
                cursor="pointer"
              />
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/register">Criar conta</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          ) : (
            <GiHamburgerMenu
              onClick={() => showMenu()}
              cursor={"pointer"}
              color="white"
              size="2rem"
            />
          )}
        </StyledMenuMobile>
      </div>
    </StyledHeader>
  );
};

export { HeaderSignup };

import { LoginForm } from "../../components/Forms/LoginForm";
import womanLogin from "../../assets/woman-login.svg";
import { HeaderSignup } from "../../components/Headers/HeaderSignup";
import StyledLogin from "./styles";

const Login = () => {
  return (
    <>
      <HeaderSignup />
      <StyledLogin>
        <div>
          <LoginForm />
          <img src={womanLogin} alt="Woman" />
        </div>
      </StyledLogin>
    </>
  );
};

export { Login };

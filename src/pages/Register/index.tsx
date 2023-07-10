import { RegisterForm } from "../../components/Forms/RegisterForm";
import { HeaderSignup } from "../../components/Headers/HeaderSignup";
import woman from "../../assets/woman-signup.svg";
import StyledRegister from "./styles";

const Register = () => {
  return (
    <>
      <HeaderSignup />
      <StyledRegister>
        <div>
          <RegisterForm />
          <img src={woman} alt="womanImg" />
        </div>
      </StyledRegister>
    </>
  );
};

export { Register };

import { LoginForm } from "../../components/Forms/LoginForm";
import womanLogin from "../../assets/woman-login.svg";

const Login = () => {
  return (
    <main>
      <div>
        <LoginForm />
        <img src={womanLogin} alt="Woman" />
      </div>
    </main>
  );
};

export { Login };

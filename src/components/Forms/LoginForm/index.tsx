import { useContext } from "react";
import { UserContext } from "../../../contexts/usersContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Iuser } from "../../../interfaces/interface.user";
import StyledFormLogin from "./styles";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Iuser>();

  const { login } = useContext(UserContext);

  const submit: SubmitHandler<Iuser> = (formData) => {
    login(formData);
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(submit)}>
      <h2>LOGIN</h2>

      <input
        type="text"
        placeholder="Digite seu nome de usuário..."
        {...register("username")}
      />

      <input
        type="text"
        placeholder="Digite sua senha..."
        {...register("password")}
      />

      <a href="">Esqueceu sua senha?</a>

      <div>
        <button type="submit">Entrar</button>
      </div>
    </StyledFormLogin>
  );
};

export { LoginForm };

import { useContext } from "react";
import { UserContext } from "../../../contexts/usersContext";
import { SubmitHandler, useForm } from "react-hook-form";

import { Iuser } from "../../../interfaces/interface.user";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Iuser>();

  const { login } = useContext(UserContext);

  const submit: SubmitHandler<Iuser> = (formData) => {
    login(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>LOGIN</h2>

      <label htmlFor="usernameLogin">Nome de usuário</label>
      <input
        type="text"
        id="usernameLogin"
        placeholder="Digite seu nome de usuário..."
        {...register("username")}
      />

      <label htmlFor="passwordLogin">Senha</label>
      <input type="text" id="passwordLogin" placeholder="Digite sua senha..." />

      <a href="">Esqueceu sua senha?</a>

      <button>Entrar</button>
    </form>
  );
};

export { LoginForm };

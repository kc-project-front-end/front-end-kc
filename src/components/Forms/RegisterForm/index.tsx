import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../contexts/usersContext";
import { TuserSchema } from "../../../interfaces/interface.user";
import { userSchema } from "../../../schemas/schema.users";
import { StyledForm } from "./styles";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TuserSchema>({ resolver: zodResolver(userSchema) });

  const { createUser } = useContext(UserContext);

  const submit: SubmitHandler<TuserSchema> = (formData) => {
    createUser(formData);
  };

  console.log(errors.address);

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>CRIAR CONTA</h2>

      <input
        type="text"
        placeholder="Digite seu nome de usuário..."
        {...register("username")}
      />
      {errors.username?.message && <p> * {errors.username?.message}</p>}

      <input
        type="text"
        placeholder="Digite seu email..."
        {...register("email")}
      />
      {errors.email?.message && <p> * {errors.email?.message}</p>}

      <input
        type="text"
        placeholder="Crie uma senha..."
        {...register("password")}
      />
      {errors.password?.message && <p> * {errors.password?.message}</p>}

      <input
        type="text"
        placeholder="Confirmar senhas..."
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <p> * {errors.confirmPassword?.message}</p>
      )}

      <input
        type="text"
        placeholder="Digite seu país..."
        {...register("address.country", { required: true })}
      />

      <input
        type="text"
        placeholder="Digite seu estado..."
        {...register("address.state")}
      />
      {errors.address?.message && <p> * {errors.address?.message}</p>}

      <input
        type="text"
        placeholder="Digite sua cidade..."
        {...register("address.city")}
      />
      {errors.address?.message && <p> * {errors.address?.message}</p>}

      <input
        type="text"
        placeholder="Rua e número da sua residência..."
        {...register("address.road")}
      />

      {errors.address?.message && <p> * {errors.address?.message}</p>}
      <div>
        <button type="submit">Criar conta</button>
      </div>
    </StyledForm>
  );
};

export { RegisterForm };

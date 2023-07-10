import { z } from "zod";

const addressSchema = z
  .object({
    street: z.string().max(120, { message: "Esse campo é obrigatório" }),
    city: z.string().max(40, { message: "Esse campo é obrigatório" }),
    state: z.string().max(2, { message: "2 Caracteres no máximo" }),
    country: z.string().max(40, { message: "Esse campo é obrigatório" }),
    road: z.string().max(120, { message: "Esse campo é obrigatório" }),
  })
  .catchall(z.string());

const userSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Esse campo é obrigatório" })
      .max(60)
      .regex(/^[A-Za-z]+$/i, { message: "Apenas letras são permitidas" }),
    email: z.string().email({ message: "Esse campo é obrigatório" }).max(120),
    password: z.string().min(6, { message: "6 Caracteres no mínimo" }),
    confirmPassword: z.string().min(6, { message: "6 Caracteres no mínimo" }),
    address: addressSchema,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Senhas não são iguais",
    path: ["confirmPassword"],
  });

export { userSchema };

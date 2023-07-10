import { z } from "zod";

const userSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Esse campo é obrigatório" })
      .max(60)
      .regex(/^[A-Za-z]+$/i, { message: "Apenas letras são permitidas" }),
    email: z
      .string()
      .email({ message: "Email inválido" })
      .max(120, { message: "Esse campo é obrigatório" }),
    password: z.string().min(6, { message: "6 Caracteres no mínimo" }),
    confirmPassword: z.string().min(6, { message: "6 Caracteres no mínimo" }),

    address: z.record(
      z.string(),
      z.object({
        country: z.string().max(40, { message: "Esse campo é obrigatório" }),
        state: z.string().max(2, { message: "2 Caracteres no máximo" }),
        city: z.string().max(40, { message: "Esse campo é obrigatório" }),
        road: z.string().max(120, { message: "Esse campo é obrigatório" }),
      })
    ),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Senhas não são iguais",
    path: ["confirmPassword"],
  });

export { userSchema };

import { z } from "zod";
import { userSchema } from "../schemas/schema.users";

interface IdefaultChildren {
  children: React.ReactNode;
}

interface Iuser {
  username: string;
  password: string;
}

interface IcreateUser {
  username: string;
  email: string;
  password: string;
  address: Record<
    string,
    {
      country: string;
      state: string;
      city: string;
      road: string;
    }
  >;
}

interface IcontextUserProps {
  user: Iuser | null;
  createUser: (formData: IcreateUser) => Promise<void>;
  login: (formData: Iuser) => Promise<void>;
}

type TuserSchema = z.infer<typeof userSchema>;

export type {
  Iuser,
  IcreateUser,
  IdefaultChildren,
  IcontextUserProps,
  TuserSchema,
};

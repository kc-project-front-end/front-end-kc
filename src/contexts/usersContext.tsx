import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  IcontextUserProps,
  IcreateUser,
  IdefaultChildren,
  Iuser,
} from "../interfaces/interface.user";

const UserContext = createContext({} as IcontextUserProps);

const UserProvider = ({ children }: IdefaultChildren) => {
  const [user, setUser] = useState<Iuser | null>(null);

  const navigate = useNavigate();

  const createUser = async (formData: IcreateUser) => {
    try {
      const response = await api.post("/users/", formData);
      setUser(response.data.username);
      //localStorage.setItem("@TOKEN", response.data.token)
      // navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (formData: Iuser) => {
    try {
      const response = await api.post("/users/login/", formData);
      setUser(response.data.username);
      // localStorage.setItem("@TOKEN", response.data.access);
      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, createUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

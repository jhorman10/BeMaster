import { createContext } from "react";

type User = {
    email: string;
    password: string;
};

export const MockContext = createContext<User[]>([ { email: "", password: "" } ])
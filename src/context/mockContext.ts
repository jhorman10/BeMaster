import { createContext } from "react";

interface User {
    email: string;
    password: string;
}

interface Category {
    title: string;
    synopsis: string;
    intro: string;
    image: string;
}

interface ContextData {
    users: User[];
    categories: Category[];
}

export const MockContext = createContext<ContextData>({
    users: [],
    categories: []
});

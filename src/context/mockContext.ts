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
    technology: Category[];
    cock: Category[];
    fitness: Category[];
    travels: Category[];
    science: Category[];
}

export const MockContext = createContext<ContextData>({
    users: [],
    categories: [],
    technology: [],
    cock: [],
    fitness: [],
    travels: [],
    science: [],
});

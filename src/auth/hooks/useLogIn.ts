import { useContext } from "react";
import { MockContext } from "../../context/mockContext";
import { LoginContext } from "../context/loginContext";

type User = {
    email: string;
    password: string;
}

export const useLogIn = ({ email, password }: User) => {
    const userMocks = useContext(MockContext);
    const { setIsLoggedIn } = useContext(LoginContext)

    const handleLogin = (): void | null => {
        const user: User | undefined = userMocks.find(user => user.email === email && user.password === password);
        if (user) {
            setIsLoggedIn(true);
        } else {
            console.log("Credenciales incorrectas");
            return null;
        }
    };
    return { handleLogin };
}

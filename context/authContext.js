import { withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../lib/ironOptions";
import { useState, createContext } from "react";

export const AuthContext = createContext({});

export const getUserFromSession = withIronSessionSsr(async ({ req }) => {
    if (req.session.user === undefined) {
        return null;
    } else {
        const user = req.session.user;
        return user;
    }
}, ironOptions);

export function AuthProvider({ children, ssrUser, ...props })  {
    const [user, setUser] = useState(ssrUser);
    const auth = {
        user,
        ...props
    }
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
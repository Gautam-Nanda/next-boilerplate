import { useContext } from "react";
import { AuthContext } from "@/context/auth.context";

export default function useAuth() {
    return useContext(AuthContext);
}
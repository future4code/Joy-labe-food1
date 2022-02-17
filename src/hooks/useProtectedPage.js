// import { useHistory } from "react-router-dom";
import { getToken } from "../constants/localStorage"
import { useEffect } from "react";

// TODO usar navigate ao invés de history

export const useProtectedPage = () => {
    const history = useHistory(); 

    useEffect(() => {
        const token = getToken();
        // if(!token) history.push("/login")
    })
}
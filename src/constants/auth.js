import { getToken } from "./localStorage"

export default function auth() {
    const authData = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    return authData
}
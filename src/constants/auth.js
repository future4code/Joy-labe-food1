import { getToken } from "./localStorage"

export const auth = {
    headers: {
        auth: getToken()
    }
}
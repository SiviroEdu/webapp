import BACKEND_ENDPOINT from "./BACKEND_ENDPOINT";
import { SetToken } from "./Token";

export type responceToken = {
    "access_token": string,
    "token_type": string
}

export type deAuhtorized = {
    detail: "Not authenticated"
}

export async function Login(username: string, password: string): Promise<boolean> {
    try {
        const response = await fetch(BACKEND_ENDPOINT + '/token', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
        });

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`)
            return false
        }

        const token: responceToken = await response.json();
        SetToken(token.access_token)
        return true
    } catch (err) {
        return false
    }
}

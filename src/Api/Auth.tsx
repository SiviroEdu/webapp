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
        const body = new URLSearchParams({
            username: username,
            password: password,
            scope: '',
            client_id: '',
            client_secret: ''
        });

        const response = await fetch(BACKEND_ENDPOINT + '/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body.toString(),
        });

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`)
            return false;
        }

        const token: responceToken = await response.json();
        SetToken(token.access_token);
        return true;
    } catch (err) {
        console.error('Error during login:', err);
        return false;
    }
}

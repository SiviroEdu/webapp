import {BACKEND_ENDPOINT2} from "./BACKEND_ENDPOINT";
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
            grant_type: "password",
            username: username,
            password: password,
            scope: '',
            client_id: 'string',
            client_secret: 'string'
        });

        console.log('Making request to:', BACKEND_ENDPOINT2 + '/auth/token');
        console.log('Request body:', body.toString());

        const response = await fetch(BACKEND_ENDPOINT2 + '/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body.toString(),
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}, Response:`, await response.text());
            return false;
        }

        const token: responceToken = await response.json();
        console.log('Token received:', token);
        SetToken(token.access_token);
        return true;
    } catch (err) {
        console.error('Error during login:', err);
        return false;
    }
}

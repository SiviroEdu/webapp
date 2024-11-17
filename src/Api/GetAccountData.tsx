import { deAuhtorized } from './Auth';
import {BACKEND_ENDPOINT1 } from "./BACKEND_ENDPOINT";
import { DeleteToken, GetToken } from "./Token";

export type AccountData = {
    id: number,
    shkolo_username: string,
    pupil_id: number,
    coins: number,
    bulbs: number
}


export async function GetAccountData(): Promise<false | AccountData> {
    try {
        const token = GetToken();
        if (token === false) return false;

        const response = await fetch(BACKEND_ENDPOINT1 + '/users/@me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return false;
        }

        const result: AccountData | deAuhtorized = await response.json();
        console.log(result)

        if (isAccountData(result)) {
            return result;
        } else {
            console.warn("User is deauthorized: ", result);
            DeleteToken()
            return false;
        }
    } catch (err) {
        console.error("get account data: ", err);
        return false;
    }
}

function isAccountData(data: any): data is AccountData {
    return (
        typeof data.id === 'number' &&
        typeof data.shkolo_username === 'string' &&
        typeof data.pupil_id === 'number' &&
        typeof data.coins === 'number' &&
        typeof data.bulbs === 'number'
    );
}

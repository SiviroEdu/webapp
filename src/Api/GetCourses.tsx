import {BACKEND_ENDPOINT2} from "./BACKEND_ENDPOINT";
import { GetToken } from "./Token";

export type courses = {
    created_at: Date,
    id: number,
    year_class_id: number,
    name: string
}

export default async function GetCourses(): Promise<false | [courses]> {
    try {
        const token = GetToken()
        if (token === false)
            return false

        console.log('Making request to:', BACKEND_ENDPOINT2 + "/courses/@me");

        const response = await fetch(BACKEND_ENDPOINT2 + "/courses/@me", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${token}`
            }
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}, Response:`, await response.text());
            return false;
        }

        const res: [courses] = await response.json();

        return res;
    } catch (err) {
        console.error('Error during getting a random question:', err);
        return false;
    }
}

import {BACKEND_ENDPOINT3} from "./BACKEND_ENDPOINT";
import { GetToken } from "./Token";

export type answers = {
    "id": number,
    "created_at": Date,
    "content": string,
    "is_correct": boolean
}
export type questions_done = {
    "id": number,
    "created_at": Date,
    "user_id": number
}

export type exercise = {
    "id": number,
    "created_at": Date,
    "course_id": number,
    "topic_id": number,
    "worth_coins": number,
    "type": string,
    "text": string,
    "answers": [answers],
    "questions_done": [questions_done]
}

export default async function GetRandomExercise(course_id: number): Promise<false | exercise> {

    try {

        const token = GetToken()
        if (token === false)
            return false

        console.log('Making request to:', BACKEND_ENDPOINT3 + '/exercises/random?course_id=' + course_id);

        const response = await fetch(BACKEND_ENDPOINT3 + '/exercises/random?course_id=' + course_id, {
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
       
        const res: exercise = await response.json(); 
        console.log(res)
        return res;
    } catch (err) {
        console.error('Error during getting a random question:', err);
        return false;
    }
}
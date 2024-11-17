import {BACKEND_ENDPOINT2} from "./BACKEND_ENDPOINT";
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

export default async function SubmitExersice(question_id: number, answer_id: number): Promise<boolean> {

    try {
        const body = new URLSearchParams({
            question_id: question_id.toString(),
            answer_id: answer_id.toString()
        });

        console.log('Making request to:', BACKEND_ENDPOINT2 + '/exercises/submit');
        console.log('Request body:', body.toString());

        const token = GetToken()
        if (token === false)
            return false

        const response = await fetch(BACKEND_ENDPOINT2 + '/exercises/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${token}`
            },
            body: body.toString(),
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}, Response:`, await response.text());
            return false;
        }

        const res = await response.json();
        return true;
    } catch (err) {
        console.error('Error during getting a random question:', err);
        return false;
    }
}
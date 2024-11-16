import { useNavigate } from 'react-router-dom';

export function DeleteToken(): boolean{
    try {
        localStorage.removeItem('token')
        return true;
    } catch(err){
        console.error("DeleteToken: ", err)
        return false;
    }
    
}

export function SetToken(token: string): boolean{
    try {
        localStorage.setItem('token', token);
        return true;
    } catch(err){
        console.error("SetToken: ", err)
        return false;
    }
}

export function GetToken(): false | string{
    try {
        const token = localStorage.getItem('token');
        if (token === null)
            return false
        return token
    } catch(err){
        console.error("GetToken: ", err)
        return false;
    }
}

export function CheckToken(): boolean {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false
        }
        return true
    } catch(err){
        console.error("CheckToken: ", err)
        return false;
    }
}
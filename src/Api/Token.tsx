import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

export function DeleteToken(): boolean{
    try {
        localStorage.removeItem('token')
        return true;
    } catch(err){
        console.error("DeleteToken: ", err)
        navigate('/login');
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
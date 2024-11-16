export type CacheUser = {
    money: number,
    experience: number,
    name: string,
    id: number
} 

export function SetCacheUser(Data: CacheUser): boolean{
    try {
        localStorage.setItem('user', JSON.stringify(Data));
        return true;
    } catch(err){
        console.error("SetCacheUser: ", err)
        return false;
    }
}

export function GetCacheUser(): false | CacheUser{
    try {
        const storedUser = localStorage.getItem('user');
        const user: CacheUser = storedUser ? JSON.parse(storedUser) : null;
        if (user === null)
            return false
        return user
    } catch(err){
        console.error("GetCacheUser: ", err)
        return false;
    }
}
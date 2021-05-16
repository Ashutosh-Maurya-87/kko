export function setCookie(name:any, value:any, expirationDays: number) {
    const d = new Date();
    d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}= ${value};${expires};path=/`;
}

export function deleteCookie(name:any) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}

export function getCookie(name:string){
    const nameStr = name + '=';
    const valueArr = document.cookie.split(";");
    for(let i = 0; i < valueArr.length; i++) {
        let value = valueArr[i];
        while(value.charAt(0) === ""){
            value = value.substring(1);
        }
        if(value.indexOf(nameStr) === 0){
            return value.substring(nameStr.length, value.length)
        }
    }
    return '';
}
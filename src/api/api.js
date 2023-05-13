
const apiURL = 'http://changtalk.co.kr/api/web_v2/'

export function mainDataApi(){
    return fetch(`${apiURL}main`).then((res)=>{
        console.log(res);
        // console.log(res.json());
        return res.json()
    }).then((data)=>data.data)
}

export function categoryDataApi(){
    let body = {
        "fucn":"list"
    }
    body = JSON.stringify(body);
    return fetch(`${apiURL}category`,{
        method : 'POST',
        body: body
    }).then((res)=>res.json()).then((data)=>data.list)
}
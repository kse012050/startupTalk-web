
const apiURL = 'http://changtalk.co.kr/api/web_v2/'

export function mainDataApi(){
    return fetch(`${apiURL}main`).then((res)=>{
        return res.json()
    }).then((data)=>data.data)
}

export function categoryDataApi(){
    console.log('카테고리 api');
    let body = {
        "fucn":"list"
    }
    body = JSON.stringify(body);
    return fetch(`${apiURL}category`,{
        method : 'POST',
        body: body
    }).then((res)=>res.json()).then((data)=>data.list)
}

export function searchDataApi(body){
    /* body = {
        "parent_category":"전체"
    } */
    console.log(body);
    body = JSON.stringify(body);
    return fetch(`${apiURL}search`,{
        method : 'POST',
        // body: body
    }).then((res)=>res.json()).then((data)=>{
        return data;
    })
}
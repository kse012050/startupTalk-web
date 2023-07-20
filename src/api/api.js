
const apiURL = process.env.REACT_APP_API_URL;

export function getCookieValue(cookieName) {
    const cookies = document.cookie;
    const cookieArray = cookies.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i];
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith(cookieName + '=')) {
        return trimmedCookie.substring(cookieName.length + 1);
      }
    }
    return null;
  }

export function getCookieBoolean(cookieName) {
    return getCookieValue(cookieName) ? false : true
}

export function mainDataApi(){
    return fetch(`${apiURL}main`).then((res)=>{
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

export function searchDataApi(body){
    body = JSON.stringify(body);
    return fetch(`${apiURL}search`,{
        method : 'POST',
        body: body
    }).then((res)=>res.json()).then((data)=>{
        return data;
    })
}

export function rankingDataApi(data){
    let body = {
        "fucn" : data
    }
    body = JSON.stringify(body);
    return fetch(`${apiURL}ranking`,{
        method : 'POST',
        body: body
    }).then((res)=>res.json()).then((data)=>{
        return data;
    })
}

export function brandDetailDataApi(id){
    let body = {
        "fucn":"detail",
        "brand_id": id
    }
    body = JSON.stringify(body);
    return fetch(`${apiURL}brand`,{
        method : 'POST',
        body: body
    }).then((res)=>res.json()).then((data)=>{
        return data.data;
    })
}

export function marketingDetailDataApi(){
    let body = {
        "fucn":"list",
    }
    body = JSON.stringify(body);
    console.log(body);
    return fetch(`${apiURL}marketing`,{
        method : 'POST',
        body: body
    }).then((res)=>res.json()).then((data)=>{
        return data.list;
    })
}

export function counselApi(data){
    let body = {...data};
    body = JSON.stringify(body);
    return fetch(`${apiURL}counsel`,{
        method : 'POST',
        body: body
    }).then((res)=>res.json()).then((data)=>{
        return data;
    })
}
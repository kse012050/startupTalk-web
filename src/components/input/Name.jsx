import React from 'react';

export default function Name({labelText , body , name}) {

    const onChange = (e)=>{
        let data = {...body.body}
        if(/^[a-zA-Z가-힣]{2,}$/.test(e.target.value)){
            data[name] = e.target.value;
        }else{
            data[name] = undefined;
        }
        body.setBody(data);
    }
    return (
        <>
            <label htmlFor="userName">{!labelText ? '이름' : labelText}</label>
            <input type="text" id='userName' placeholder='성함을 입력해주세요' name={name} onChange={onChange}/>
        </>
    );
}


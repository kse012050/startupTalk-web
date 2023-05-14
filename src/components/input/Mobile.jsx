import React from 'react';

export default function Mobile({ body , name }) {
    const onChange = (e)=>{
        let data = {...body.body}
        if(/^(010|011|016|017|018|019)\d{8,8}$/.test(e.target.value)){
            data[name] = e.target.value;
        }else{
            data[name] = undefined;
        }
        body.setBody(data);
    }
    return (
        <>
            <label htmlFor="userMobile">연락처</label>
            <input type="text" id='userMobile' placeholder='연락처를 입력해주세요' maxLength={11} name={name} onChange={onChange}/>
        </>
    );
}


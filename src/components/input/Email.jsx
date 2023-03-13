import React from 'react';

export default function Email({}) {
    return (
        <>
            <label htmlFor="userEmail">이메일</label>
            <input type="text" id='userEmail' placeholder='이메일을 입력하세요'/>   
        </>
    );
}


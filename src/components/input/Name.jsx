import React from 'react';

export default function Name({labelText}) {
    return (
        <>
            <label htmlFor="userName">{!labelText ? '이름' : labelText}</label>
            <input type="text" id='userName' placeholder='성함을 입력해주세요'/>
        </>
    );
}


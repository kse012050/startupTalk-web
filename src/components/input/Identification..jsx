import React from 'react';

export default function Identification() {
    return (
        <>
            <label htmlFor="identification">본인인증</label>
            <input type="text" id='identification' placeholder='휴대폰 번호를 입력해주세요'/>
            <button className='btn-color'>인증번호 전송</button>
        </>
    );
}


import React from 'react';

export default function Identification() {
    const test = (e) => {
        e.stopPropagation()
    }
    return (
        <>
            <label htmlFor="identification">본인인증</label>
            <div>
                <input type="text" id='identification' placeholder='휴대폰 번호를 입력해주세요' name='mobile' onChange={test} required/>
            </div>
            <div>
                <input type="text" placeholder='인증번호를 입력해주세요' name='mobile_auth_id' onChange={test} required/>
            </div>
            <button className='btn-color'>인증번호 전송</button>
        </>
    );
}


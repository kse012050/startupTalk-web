import React from 'react';

export default function Password() {
    return (
        <>
            <label htmlFor="useEmail">비밀번호</label>
            <input type="text" id='useEmail' placeholder='비밀번호 (8~15자리 영문+숫자+특수문자조합)' />
        </>
    );
}


import React from 'react';

export default function Inquiry() {
    return (
        <>
            <label htmlFor="">문의하기</label>
            <textarea placeholder='아래 사항을 기입해 주세요
                • 가입 시 성함
                • 정보 받을 메일 주소
                • (본인인증 시) 인증한 핸드폰 번호'>
            </textarea>
        </>
    );
}


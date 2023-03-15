import React from 'react';
import InputLayout from '../../components/input/InputLayout';
import Inquiry from '../../components/input/Inquiry';

export default function FindInquiry() {
    return (
        <InputLayout>
            <ul>
                <li>
                    <Inquiry labelText='문의하기' placeholderText='아래 사항을 기입해 주세요
                        • 가입 시 성함
                        • 정보 받을 메일 주소
                        • (본인인증 시) 인증한 핸드폰 번호
                    '/>
                </li>
            </ul>
            <input type="submit" value="등록하기" className='btn-basic'/>
        </InputLayout>
    );
}


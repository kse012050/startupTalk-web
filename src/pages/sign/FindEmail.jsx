import React from 'react';
import InputLayout from '../../components/input/InputLayout';
import InputEmail from '../../components/input/Email';

export default function FindEmail() {
    return (
        <InputLayout>
            <ul>
                <li>
                    <InputEmail label={
                        '가입 시 입력한 이메일을 입력해주세요.\n 임시 비밀번호를 발송해 드립니다.'}
                    />
                </li>
            </ul>
            <input type="submit" value="확인" className='btn-basic'/>
        </InputLayout>
    );
}


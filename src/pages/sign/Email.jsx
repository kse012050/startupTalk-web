import React from 'react';
import InputLayout from '../../components/input/InputLayout';
import InputEmail from '../../components/input/Email';
import InputPassword from '../../components/input/Password';
import { Link } from 'react-router-dom';

export default function Email() {
    return (
        <>
            <h2>이메일 로그인</h2>
            <InputLayout>
                <ul>
                    <li>
                        <InputEmail />
                    </li>
                    <li>
                        <InputPassword />
                    </li>
                </ul>
                <div>
                    <input type="checkbox" id='autoLogin'/><label htmlFor="autoLogin">로그인</label>
                    <Link>ID / PW 찾기</Link>
                </div>
                <input type="submit" value={'로그인'} className={'btn-color'}/>
                <Link to={'/sign/signUp'} className='btn-border'>이메일 회원가입</Link>
            </InputLayout>
        </>
    );
}


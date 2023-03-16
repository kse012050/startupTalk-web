import React from 'react';
import InputLayout from '../../components/input/InputLayout';
import InputEmail from '../../components/input/Email';
import InputPassword from '../../components/input/Password';
import { Link, useNavigate } from 'react-router-dom';

export default function Email() {
    const navigate = useNavigate();
    const test = () =>{
        navigate('/my')
    }
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
                    <input type="checkbox" id='autoLogin'/><label htmlFor="autoLogin">자동 로그인</label>
                    <Link to={'/sign/find'}>ID / PW 찾기</Link>
                </div>
                <input type="submit" value={'로그인'} className={'btn-basic'} onClick={test}/>
                <Link to={'/sign/signUp'} className='btn-border'>이메일 회원가입</Link>
            </InputLayout>
        </>
    );
}


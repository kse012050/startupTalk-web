import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <>
            <h2>로그인</h2>
            <p>
                간편하게 로그인하고<br />
                다양한 서비스를 이용하세요.
            </p>
            <ul>
                <li><Link>네이버로 시작하기</Link></li>
                <li><Link>카카오톡으로 시작하기</Link></li>
                <li><Link>Apple로 시작하기</Link></li>
                <li><Link to={'/sign/email'}>이메일로 로그인</Link></li>
            </ul>
        </>
    );
}


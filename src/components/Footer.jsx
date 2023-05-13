import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="contentSize">
                <img src={require('../images/logo-footer.png')} alt="창업톡 회색 로고" />
                <ul>
                    <li><Link to="http://changtalk.co.kr/policy/service.html">파트너 센터</Link></li>
                    <li><Link to="http://changtalk.co.kr/policy/privacy.html">서비스 이용약관</Link></li>
                    <li><Link to="http://changtalk.co.kr/">개인정보 보호정책</Link></li>
                </ul>
            </div>
        </footer>
    );
}


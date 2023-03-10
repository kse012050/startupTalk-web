import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="contentSize">
                <img src={require('../images/logo-footer.png')} alt="창업톡 회색 로고" />
                <ul>
                    <li><Link to="/">파트너 센터</Link></li>
                    <li><Link to="/">서비스 이용약관</Link></li>
                    <li><Link to="/">개인정보 보호정책</Link></li>
                </ul>
            </div>
        </footer>
    );
}


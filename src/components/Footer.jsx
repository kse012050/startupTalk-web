import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="contentSize">
                <img src={require('../images/logo-footer.png')} alt="창업톡 회색 로고" />
                <dl>
                    <dt>앱 다운로드</dt>
                    <dd><Link to="#" className='beforeIcon-gp' rel="noreferrer">안드로이드</Link></dd>
                    <dd><Link to="#" className='beforeIcon-apple' rel="noreferrer">iPhone</Link></dd>
                </dl>
                <ul>
                    <li><Link to="http://partner.changtalk.co.kr/main" target='_blank'>파트너 센터</Link></li>
                    <li><Link to="http://changtalk.co.kr/policy/service.html" target='_blank'>서비스 이용약관</Link></li>
                    <li><Link to="http://changtalk.co.kr/policy/privacy.html" target='_blank'>개인정보 보호정책</Link></li>
                </ul>
            </div>
        </footer>
    );
}


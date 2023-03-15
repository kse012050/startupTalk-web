import React from 'react';
import { Link } from 'react-router-dom';

export default function Top() {
    return (
        <div className='topArea'>
            <div className='contentSize'>
                <h2><em>홍길동</em>님의 페이지</h2>
                <button className='logout'>로그아웃</button>
                <ul>
                    <li><Link to={'/my/notice'}>공지사항</Link></li>
                    <li><Link to={'/my/account'}>계정정보</Link></li>
                    <li><Link>서비스 문의</Link></li>
                </ul>
            </div>
        </div>
    );
}


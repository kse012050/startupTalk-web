import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContext } from '../../context/Responsive';

export default function Top() {
    const responsive = useContext(ResponsiveContext);
    return (
        <div className='topArea'>
            <div className='contentSize'>
                <h2><em>홍길동</em>님의 페이지</h2>
                {responsive ?
                    <>
                        <button className='logout'>로그아웃</button>
                        <ul>
                            <li><Link to={'/my/notice'}>공지사항</Link></li>
                            <li><Link to={'/my/account'}>계정정보</Link></li>
                            <li><Link to={'/my/service'}>서비스 문의</Link></li>
                        </ul>
                    </> :
                    <Link>설정</Link>
                }
            </div>
        </div>
    );
}


import React from 'react';
import { useLocation } from 'react-router-dom';
import Tab from '../../components/Tab';
import FindEmail from './FindEmail';
import FindInquiry from './FindInquiry';

export default function Find() {
    const location = useLocation();
    let pageName = location.pathname.substring(1).split('/').at(-1);
    const tabList = [{
            name : '이메일 주소로 찾기',
            path : 'email'
        },{
            name : '고객센터 문의',
            path : 'inquiry'
        },
    ]
    return (
        <>
            <h2>ID/PW 찾기</h2>
            <Tab tabList={tabList}/>
            {pageName === 'email' && <FindEmail/>}
            {pageName === 'inquiry' && <FindInquiry/>}
        </>
    );
}


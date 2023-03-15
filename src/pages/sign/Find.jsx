import React, { useEffect, useState } from 'react';
import Tab from '../../components/Tab';
import FindEmail from './FindEmail';
import FindInquiry from './FindInquiry';

export default function Find() {
    const [content , setContent] = useState('')
    const tabList = [{
            name : '이메일 주소로 찾기',
            path : 'email'
        },{
            name : '고객센터 문의',
            path : 'inquiry'
        },
    ]

    useEffect(()=>{
        setContent(tabList[0].path)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <h2>ID/PW 찾기</h2>
            <Tab tabList={tabList} content={[content ,setContent]}/>
            {content === 'email' && <FindEmail/>}
            {content === 'inquiry' && <FindInquiry/>}
        </>
    );
}


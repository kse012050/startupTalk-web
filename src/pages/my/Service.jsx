import React, { useEffect, useState } from 'react';
import Tab from '../../components/Tab';
import Inquiry from './Inquiry';
import InquiryHistory from './InquiryHistory';

export default function Service() {
    const [content , setContent] = useState('')
    const tabList = [{
            name : '문의하기',
            path : 'contactUs',
        },{
            name : '나의 문의 내역',
            path : 'inquiryHistory',
        },
    ]

    useEffect(()=>{
        setContent(tabList[0].path)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <h3>서비스 문의</h3>
            <Tab tabList={tabList} content={[content ,setContent]}/>
            {content === 'contactUs' && <Inquiry />}
            {content === 'inquiryHistory' && <InquiryHistory />}
        </>
    );
}


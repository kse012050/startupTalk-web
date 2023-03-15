import React, { useEffect, useState } from 'react';
import Tab from '../../components/Tab';
import Interest from './Interest';
import ReceiptDetails from './ReceiptDetails';

export default function Main() {
    const [content , setContent] = useState('')
    const tabList = [{
            name : '관심 아이템',
            path : 'interest',
            count : 12
        },{
            name : '상담 접수 내역',
            path : 'receiptDetails',
            count : 5
        },
    ]

    useEffect(()=>{
        setContent(tabList[0].path)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <Tab tabList={tabList} content={[content ,setContent]}/>
            {content === 'interest' && <Interest />}
            {content === 'receiptDetails' && <ReceiptDetails />}
        </>
    );
}


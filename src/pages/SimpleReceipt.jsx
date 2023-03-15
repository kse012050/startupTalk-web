import React, { useEffect, useState } from 'react';
import Email from '../components/input/Email';
import Identification from '../components/input/Identification.';
import InputLayout from '../components/input/InputLayout';
import InputName from '../components/input/Name';
import InputText from '../components/input/Text';
import Tab from '../components/Tab';

export default function SimpleReceipt() {
    const [content , setContent] = useState('')
    const tabList = [{
            name : '예',
            path : true
        },{
            name : '아니요',
            path : false
        },
    ]
    useEffect(()=>{
        setContent(tabList[0].path)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <h2>간편 상담 접수</h2>
            <InputLayout>
                <ul>
                    <li>
                        <InputName labelText='성함'/>
                    </li>
                    <li>
                        <Identification />
                    </li>
                    <li>
                        <InputText labelText="창업상담 선호" placeholderText="지역명을 입력해주세요"/>
                    </li>
                    <li>
                        <InputText labelText="전화상담 선호" placeholderText="선호 시간대를 알려주세요">
                            <Tab tabList={tabList} content={[content ,setContent]}/>
                        </InputText>
                    </li>
                    <li>
                        <Email />
                    </li>
                </ul>
                <div>
                    <input type="checkbox" id='agree'/><label htmlFor="agree"><mark>개인정보 수집 및 이용</mark>에 동의합니다.</label>
                </div>
                <input type="submit" value="완료" className='btn-basic'/>
            </InputLayout>
        </>
    );
}


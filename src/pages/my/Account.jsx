import React, { useEffect, useState } from 'react';
import InputLayout from '../../components/input/InputLayout';
import InputName from '../../components/input/Name';
import Email from '../../components/input/Email';
import Identification from '../../components/input/Identification.';
import InputText from '../../components/input/Text';
import Tab from '../../components/Tab';
// import { Link } from 'react-router-dom';

export default function Account() {
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
            <h3>계정정보</h3>
            <InputLayout>
                <ul>
                    <li>
                        <InputName labelText="담당자 성함"/>
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
                <p className='kakao'>카카오톡 로그인</p>
                <input type="submit" value="수정하기" className='btn-basic' />
                <div className='withdrawalArea'>
                    <button className='withdrawal'>회원탈퇴</button>
                </div>
            </InputLayout>
        </>
    );
}


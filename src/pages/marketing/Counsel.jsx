import React, { useState } from 'react';
import InputLayout from '../../components/input/InputLayout';
import InputName from '../../components/input/Name';
import InputText from '../../components/input/Text';
import InputMobile from '../../components/input/Mobile';
import InputInquiry from '../../components/input/Inquiry';
import { counselApi } from '../../api/api';

export default function Counsel() {
    const [body , setBody] = useState({
        "fucn":"counsel",
        "name" : undefined,
        "company_info" : undefined,
        "mobile" : undefined,
        "comment" : undefined
    })
    return (
        <>
            <h2>창업톡 상담</h2>   
            <InputLayout body={{body : body , setBody}} api={counselApi}>
                <ul>
                    <li>
                        <InputText labelText="업체명/직함" placeholderText="업체명/직함을 입력해주세요" body={{body : body , setBody}} name='company_info'/>
                    </li>
                    <li>
                        <InputName labelText="담당자 성함" body={{body : body , setBody}} name='name'/>
                    </li>
                    <li>
                        <InputMobile body={{body : body , setBody}} name='mobile'/>
                    </li>
                    <li>
                        <InputInquiry labelText='신청서' placeholderText='- 사업장 주소지(예정) 또는 홈페이지 링크
                        - 개업일(예정일) 
                        - 네이버, SNS, 유튜브 등 관심 마케팅
                        - 업종전환, 점포이전 등 창업 컨설팅 희망사항
                        - 자유 추가 문의사항
                        ' name='comment' body={{body : body , setBody}}/>
                    </li>
                </ul>
                <input type="submit" value="신청 완료" className='btn-basic'/>
            </InputLayout>
        </>
    );
}


import React from 'react';
import InputLayout from '../input/InputLayout';
import Identification from '../input/Identification.';

export default function EasyConsult() {
    return (
        <>
            <strong>간편 상담 접수</strong>
            <InputLayout>
                <ul>
                    <li>
                        <label htmlFor="">성함</label>
                        <div>
                            <input type="text" placeholder='성함을 입력해주세요'/>
                        </div>
                    </li>
                    <li>
                        <Identification />
                    </li>
                    <li>
                        <label htmlFor="">창업 희망지역*</label>
                        <div>
                            <input type="radio" defaultChecked/>
                            <label htmlFor="">예</label>
                            <input type="radio" />
                            <label htmlFor="">아니요</label>
                        </div>
                        <div>
                            <input type="text" placeholder='지역명을 입력해주세요'/>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="">전화상담 선호</label>
                        <div>
                            <input type="text" placeholder='선호 시간대를 알려주세요'/>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="">이메일 주소*</label>
                        <div>
                            <input type="email" placeholder='이메일 주소를 입력해주세요'/>
                        </div>
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


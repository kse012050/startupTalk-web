import React, { useContext } from 'react';
import InputLayout from '../../components/input/InputLayout';
import { ResponsiveContext } from '../../context/Responsive';

export default function Inquiry() {
    const responsive = useContext(ResponsiveContext);
    return (
        <InputLayout>
            <ul>
                <li>
                    <input type="text" placeholder='제목을 입력해주세요'/>
                </li>
                <li>
                    <textarea placeholder='문의 사항을 입력해주세요'></textarea>
                </li>
            </ul>
            {responsive ||
                <label htmlFor="">첨부파일</label>
            }
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>이미지 파일 기준 이미지당 5MB이하, 최대 3개만 등록가능합니다.</p>
            <input type="submit" value="등록하기" className='btn-basic'/>
        </InputLayout>
    );
}


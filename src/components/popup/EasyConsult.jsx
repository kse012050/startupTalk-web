import React, { useEffect, useState } from 'react';
import InputLayout from '../input/InputLayout';
import Identification from '../input/Identification.';
import { inputChange, requiredList } from '../../api/validation';

export default function EasyConsult() {
    const [inputs, setInputs] = useState()
    const [isPopup, setIsPopup] = useState()
    const [info, setInfo] = useState()

    useEffect(()=>{
        requiredList(setInputs)
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        Object.entries(inputs).reverse().forEach(([keys, value])=>{
            if(!value){
                if(keys === 'name'){
                    setInfo('성함을 입력해주세요')
                }else if(keys === 'mobile' || keys === 'mobile_auth_id'){
                    setInfo('휴대폰 인증을 진행해주세요')
                }else if(keys === 'area'){
                    setInfo('창업 희망지역을 입력해주세요')
                }else if(keys === 'email'){
                    setInfo('이메일 주소를 입력해주세요')
                }
                setIsPopup(true)
            }
        })
        if(!Object.values(inputs).some((value)=>!value)){
            console.log(inputs);
           /*  api('counsel', 'req', inputs)
                .then((data)=>{
                    console.log(data);
                }) */
        }
    }

    return (
        <>
            <strong>간편 상담 접수</strong>
            <form className='inputBox' onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="name">성함</label>
                            <div>
                                <input type="text" placeholder='성함을 입력해주세요' name='name' required/>
                            </div>
                        </li>
                        <li>
                            <Identification />
                        </li>
                        <li>
                            <label htmlFor="area">창업 희망지역</label>
                            <div>
                                <input type="text" placeholder='지역명을 입력해주세요' name='area' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">전화상담 선호</label>
                            <div>
                                <input type="radio" name='phone_counsel_preference_yn' id='phone_counsel_preference_y' value='y' defaultChecked/>
                                <label htmlFor="phone_counsel_preference_y">예</label>
                                <input type="radio" name='phone_counsel_preference_yn' id='phone_counsel_preference_n' value='n'/>
                                <label htmlFor="phone_counsel_preference_n">아니요</label>
                            </div>
                            <div>
                                <input type="text" placeholder='선호 시간대를 알려주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="email">이메일 주소</label>
                            <div>
                                <input type="email" placeholder='이메일 주소를 입력해주세요' name='email' required/>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <input type="checkbox" id='agree'/><label htmlFor="agree"><mark>개인정보 수집 및 이용</mark>에 동의합니다.</label>
                    </div>
                    <input type="submit" value="완료" onClick={onSubmit} className='btn-basic'/>
                </fieldset>
            </form>
        </>
    );
}


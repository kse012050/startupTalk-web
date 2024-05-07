import React, { useEffect, useState } from 'react';
import Identification from '../input/Identification.';
import { inputChange, requiredList } from '../../api/validation';
import Popup from './Popup';
import { api } from '../../api/api';

export default function EasyConsult({ popup, id }) {
    const [inputs, setInputs] = useState({'brand_id': id, 'phone_counsel_preference_yn': 'y', 'counsel_preference_time': ''})
    const [isAgree, setIsAgree] = useState(false)
    const [isPopup, setIsPopup] = useState()
    const [info, setInfo] = useState()
    
    useEffect(()=>{
        requiredList(setInputs)
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        Object.entries(inputs).reverse().forEach(([keys, value])=>{
            if(!value){
                if(keys === 'name'){
                    setInfo('성함을 입력해주세요')
                }else if(keys === 'mobile' || keys === 'mobile_auth_id'){
                    setInfo('휴대폰 인증을 진행해주세요')
                }else if(keys === 'area'){
                    setInfo('창업 희망지역을 입력해주세요')
                }else if(keys === 'counsel_preference_time'){
                    setInfo('선호 시간대를 알려주세요')
                }else if(keys === 'email'){
                    setInfo('이메일 주소를 입력해주세요')
                }
                setIsPopup(true)
            }
        })

        if(!Object.values(inputs).some((value)=>!value) && !isAgree){
            setInfo('개인정보 수집 및 이용에 동의해주세요')
            setIsPopup(true)
            return
        }

        if(!Object.values(inputs).some((value)=>!value) && isAgree){
            // console.log(inputs);
            api('counsel', 'req', inputs)
                .then(({ result, error_message })=>{
                    if(result){
                        setInfo(error_message)
                        setIsPopup('완료')
                    }
                })
        }
    }

    const popupFunc = () => {
        if(isPopup === '완료'){
            popup[1](!popup[0])
        }
    }

    return (
        <>
            <div>
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
                                <Identification inputs={inputs} setInputs={setInputs}/>
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
                                    <input type="radio" name='phone_counsel_preference_yn' id='phone_counsel_preference_y' value='y' defaultChecked
                                        onChange={()=>setInputs((prev)=>({...prev, 'counsel_preference_time': ''}))}
                                    />
                                    <label htmlFor="phone_counsel_preference_y">예</label>
                                    <input type="radio" name='phone_counsel_preference_yn' id='phone_counsel_preference_n' value='n' 
                                        onChange={()=>setInputs((prev)=>{
                                            const obj = {...prev}
                                            delete obj.counsel_preference_time;
                                            return obj
                                        })}
                                    />
                                    <label htmlFor="phone_counsel_preference_n">아니요</label>
                                </div>
                                {(inputs?.phone_counsel_preference_yn === 'y' || inputs?.phone_counsel_preference_yn === '') &&
                                    <div>
                                        <input type="text" placeholder='선호 시간대를 알려주세요' name='counsel_preference_time'/>
                                    </div>
                                }
                            </li>
                            <li>
                                <label htmlFor="email">이메일 주소</label>
                                <div>
                                    <input type="email" placeholder='이메일 주소를 입력해주세요' name='email' required/>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <input type="checkbox" id='agree' value={isAgree} onClick={()=>setIsAgree(prev=>!prev)}/><label htmlFor="agree"><mark>개인정보 수집 및 이용</mark>에 동의합니다.</label>
                        </div>
                        <input type="submit" value="완료" onClick={onSubmit} className='btn-basic'/>
                    </fieldset>
                </form>
                <button onClick={()=>popup[1](!popup[0])}>닫기</button>
                { isPopup && <Popup type='confime' isPopup={[isPopup, setIsPopup]} info={{content: info}} func={popupFunc}/>}
            </div>
        </>
    );
}


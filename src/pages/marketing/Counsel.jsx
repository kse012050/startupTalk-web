import React, { useEffect, useState } from 'react';
import { inputChange, requiredList } from '../../api/validation';
import Popup from '../../components/popup/Popup';
import { api } from '../../api/api';

export default function Counsel() {
    const [inputs, setInputs] = useState()
    const [isPopup, setIsPopup] = useState()
    const [info, setInfo] = useState()

    useEffect(()=>{
        requiredList(setInputs)
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        Object.entries(inputs).reverse().forEach(([keys, value])=>{
            if(!value){
                if(keys === 'company_info'){
                    setInfo('업체명/직함을 입력해주세요')
                }else if(keys === 'name'){
                    setInfo('성함을 입력해주세요')
                }else if(keys === 'mobile'){
                    setInfo('연락처를 입력해주세요')
                }else if(keys === 'comment'){
                    setInfo('신청서를 입력해주세요')
                }
                setIsPopup(true)
            }
        })
        if(!Object.values(inputs).some((value)=>!value)){
            api('counsel', 'counsel', inputs)
                .then(({ result, error_message })=>{
                    if(result){
                        setIsPopup(true)
                        setInfo(error_message)
                    }
                })
        }
    }

    return (
        <>
            <h2>창업톡 상담</h2>
            <form className='inputBox' onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="company_info">업체명/직함</label>
                            <div>
                                <input type="text" placeholder='업체명/직함을 입력해주세요' name='company_info' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="name">담당자 성함</label>
                            <div>
                                <input type="text" placeholder='성함을 입력해주세요' name='name' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="mobile">연락처</label>
                            <div>
                                <input type="text" placeholder='연락처를 입력해주세요' name='mobile' data-formet="numb" maxLength="11" required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="comment">신청서</label>
                            <div>
                                <textarea name="comment" required
                                    placeholder='- 사업장 주소지(예정) 또는 홈페이지 링크
                                    - 개업일(예정일) 
                                    - 네이버, SNS, 유튜브 등 관심 마케팅
                                    - 업종전환, 점포이전 등 창업 컨설팅 희망사항
                                    - 자유 추가 문의사항'></textarea>
                            </div>
                        </li>
                    </ul>
                    <input type="submit" value="신청 완료" onClick={onSubmit} className='btn-basic'/>
                </fieldset>
            </form>

            { isPopup && <Popup type='confime' isPopup={[isPopup, setIsPopup]} info={{content: info}}/>}
        </>
    );
}


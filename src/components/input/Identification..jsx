import React, { useState } from 'react';
import { isFormet } from '../../api/validation';
import { api } from '../../api/api';
import Popup from '../popup/Popup';

export default function Identification({ setInputs }) {
    const [is, setIs] = useState('전송')
    const [mobileInputs, setMobileInputs] = useState({'mobile': '', 'auth_number': ''})
    const [time, setTime] = useState()
    const [isPopup, setIsPopup] = useState()
    const [info, setInfo] = useState()

    const test = (e) => {
        const { name } = e.target
        e.stopPropagation()
        
        if(isFormet('numb', e.target.value)){
            e.target.value = isFormet('numb', e.target.value)['value'];
        }
        // console.log(isFormet('numb', e.target.value));

        setMobileInputs((prev)=>({...prev, [name]: e.target.value}))
    }

    const onClick = (is) => {
        if(is === '전송'){
            if(mobileInputs.mobile.length < 11){
                setInfo('휴대폰 번호를 확인해주세요')
                setIsPopup(true)
                return
            }
            api('mobile', 'req', {'mobile': mobileInputs.mobile})
                .then(({ result })=>{
                    if(result){
                        setIs('인증')
                    }
                })
        }

        if(is === '인증'){
            if(mobileInputs.auth_number.length < 6){
                setInfo('인증번호를 확인해주세요')
                setIsPopup(true)
                return
            }
            api('mobile', 'chk', mobileInputs)
                .then(({ result, data })=>{
                    if(result){
                        setIs('완료')
                        setTime(data.auth_check_date)
                        setInputs((prev)=>({...prev, 'mobile': data.mobile, 'mobile_auth_id': data.mobile_auth_id }))
                    }else{
                        setIs('전송')
                    }
                })
        }

        if(is === '완료'){
            setIs('전송')
            setInputs((prev)=>({...prev, 'mobile': '', 'mobile_auth_id': ''}))
            setTime('')
        }
    }
    return (
        <>
            <label htmlFor="identification">본인인증</label>
            <div>
                <input type="text" id='identification' placeholder='휴대폰 번호를 입력해주세요' name='mobile' data-formet='numb' onChange={test} readOnly={is === '완료'} required maxLength='11'/>
                { time && <mark>{ time } 휴대폰 번호 인증 완료</mark> }
            </div>
            { is === '인증' &&
                <div>
                    <input type="text" placeholder='인증번호를 입력해주세요' name='auth_number' data-formet='numb' onChange={test} required maxLength='6'/>
                </div>
            }
            <button type='button' className='btn-color' onClick={()=>onClick(is)}>
                { is !== '완료' ? `인증번호 ${is}` : '번호변경'}
            </button>
            
            { isPopup && <Popup type='confime' isPopup={[isPopup, setIsPopup]} info={{content: info}}/>}
        </>
    );
}


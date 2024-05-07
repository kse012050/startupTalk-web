import React, { useState } from 'react';
import { isFormet } from '../../api/validation';
import { api } from '../../api/api';

export default function Identification() {
    const [is, setIs] = useState('전송')
    const [mobileInputs, setMobileInputs] = useState()
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
            api('mobile', 'req', {'mobile': mobileInputs.mobile})
                .then(({ result })=>{
                    if(result){
                        setIs('인증')
                    }
                })
        }

        if(is === '인증'){
            // console.log(mobileInputs);
            api('mobile', 'chk', { ...mobileInputs })
                .then(({ result })=>{
                    console.log(result);
                    if(result){
                        setIs('완료')
                    }else{
                        setIs('전송')
                    }
                })
        }

        if(is === '완료'){
            setIs('전송')
        }
    }
    return (
        <>
            <label htmlFor="identification">본인인증</label>
            <div>
                <input type="text" id='identification' placeholder='휴대폰 번호를 입력해주세요' name='mobile' data-formet='numb' onChange={test} disabled={is === '완료'} required maxLength='11'/>
            </div>
            { is === '인증' &&
                <div>
                    <input type="text" placeholder='인증번호를 입력해주세요' name='auth_number' data-formet='numb' onChange={test} required maxLength='6'/>
                </div>
            }
            <button type='button' className='btn-color' onClick={()=>onClick(is)}>
                { is !== '완료' ? `인증번호 ${is}` : '번호변경'}
                
            </button>
        </>
    );
}


import React, { useState } from 'react';
import { isFormet } from '../../api/validation';

export default function Identification() {
    const [is, setIs] = useState('전송')
    const [inputs, setInputs] = useState()
    const test = (e) => {
        e.stopPropagation()
        
        console.log(isFormet('numb', e.target.value));
        if(isFormet('numb', e.target.value)){
            e.target.value = isFormet('numb', e.target.value)['value'];
        }
    }

    const onClick = (is) => {
        if(is === '전송'){
            setIs('인증')
            /*  api('mobile', 'check', inputs)
                .then((data)=>{
                    console.log(data);
                }) */
        }

        if(is === '인증'){
            setIs('완료')
            /*  api('mobile', 'check', inputs)
                .then((data)=>{
                    console.log(data);
                }) */
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
                    <input type="text" placeholder='인증번호를 입력해주세요' name='mobile_auth_id' data-formet='numb' onChange={test} required maxLength='6'/>
                </div>
            }
            <button type='button' className='btn-color' onClick={()=>onClick(is)}>
                { is !== '완료' ? `인증번호 ${is}` : '번호변경'}
                
            </button>
        </>
    );
}


import React, { useState } from 'react';
import InputLayout from '../../components/input/InputLayout';
import InputName from '../../components/input/Name';
import InputEmail from '../../components/input/Email';
import InputPassword from '../../components/input/Password';
import InputPasswordRe from '../../components/input/PasswordRe';
import Popup from '../../components/popup/Popup';

export default function SignUp() {
    const [ popup , setPopup ] = useState(false);
    return (
        <>
            <h2>회원가입</h2>
            <InputLayout>
                <ul>
                    <li className='requi'>
                        <InputName/>
                    </li>
                    <li className='requi'>
                        <InputEmail/>
                    </li>
                    <li className='requi'>
                        <InputPassword/>
                    </li>
                    <li className='requi'>
                        <InputPasswordRe/>
                    </li>
                </ul>
                <div className='agreeArea'>
                    <input type="checkbox" id="agree"/>
                    <label htmlFor="agree">
                        회원가입 시 서비스 <mark onClick={()=>setPopup(!popup)}>이용약관</mark>과<br/>
                        <mark>개인정보 정책 및 마케팅 정보</mark> 수신동의하는 것으로 간주합니다.<br/>
                    </label>
                </div>
                {popup &&
                    <Popup type='termsOfUse' isPopup={[popup , setPopup]}/>
                    // <Popup type='find' isPopup={[popup , setPopup]} info={{title : '' , content : '이메일 형식에 맞게 입력해주세요.'}}/>
                }
                <input type="submit" value={'회원가입'} className={'btn-basic'}/>
            </InputLayout>
        </>
    );
}


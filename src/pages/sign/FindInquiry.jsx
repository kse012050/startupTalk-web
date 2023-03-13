import React from 'react';
import InputLayout from '../../components/input/InputLayout';
import Inquiry from '../../components/input/Inquiry';

export default function FindInquiry() {
    return (
        <InputLayout>
            <ul>
                <li>
                    <Inquiry />
                </li>
            </ul>
            <input type="submit" value="등록하기" className='btn-color'/>
        </InputLayout>
    );
}


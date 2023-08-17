import React from 'react';
import * as validation from '../../api/validation';

export default function ItemPrice({info}) {
    return (
        <div className='itemText'>
            <p>{info.menu_name}</p>
            <strong>{validation.addCommas(info.menu_price)}원</strong>
        </div>
    );
}


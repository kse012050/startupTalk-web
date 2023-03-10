import React from 'react';
import { Link } from 'react-router-dom';
import ItemBasic from './ItemBasic';

export default function Item({img , type}) {
    console.log(type);
    return (
        <Link to={'/'} className={`itemBox ${!type && 'basic'}`}>
            <div className='imgBox' style={{backgroundImage : `url(${img})`}}>

            </div>
            {!type && <ItemBasic />}
        </Link>
    );
}


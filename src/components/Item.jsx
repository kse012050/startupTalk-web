import React from 'react';
import { Link } from 'react-router-dom';
import ItemBasic from './ItemBasic';
import ItemBest from './ItemBest';

export default function Item({img , type , info }) {
    // console.log(info);
    return (
        <Link to={'/'} className={`itemBox ${!type ? 'basic' : type}`}>
            <div className='imgBox' style={{backgroundImage : `url(${img})`}}>

            </div>
            {!type && <ItemBasic info={info}/>}
            {type === 'best' && <ItemBest />}
        </Link>
    );
}


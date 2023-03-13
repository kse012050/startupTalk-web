import React from 'react';
import { Link } from 'react-router-dom';
import ItemBasic from './ItemBasic';
import ItemBest from './ItemBest';

export default function Item({img , type , info , support}) {
    const bookMark = (e) =>{
        e.preventDefault();
        alert('북마크')
    }
    return (
        <Link to={'/ranking'} className={`itemBox ${!type ? 'basic' : type}`}>
            <div className='imgBox' style={{backgroundImage : `url(${img})`}}>
                {support &&
                    <ul>
                        <li>창업비 지원</li>
                        <li>프로모션</li>
                    </ul>
                }
                {type === 'best' &&
                    <button onClick={bookMark}>북마크</button>
                }
            </div>
            {!type && <ItemBasic info={info}/>}
            {type === 'best' && <ItemBest />}
        </Link>
    );
}


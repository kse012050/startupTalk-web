import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DropBox({type , first , list}) {
    const [isDrop , setIsDrop] = useState(false)
    // const [current , setCurrent] = useState('전체 카테고리')

    const dropEvent = () =>{
        setIsDrop((test)=>{
            return !test
        });
    }

    const listClick = (e , text) =>{
        e.preventDefault();
        text.includes('전체') && (text = '전체보기')
        first[1](text);
        dropEvent();
    }
    return (
        <div className={`dropBox-${type}`}>
            <button onClick={dropEvent}>{first[0]}</button>
            {isDrop &&
                <ul>
                    {list.map((l , i)=> <li key={i}><Link onClick={(e)=>listClick(e ,l)} className={first[0] === l ? 'active' : null}>{l}</Link></li>)}
                </ul>
            }
        </div>
    );
}


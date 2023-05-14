import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

export default function DropBox({type , first , list , body}) {
    const navigate = useNavigate();
    const [isDrop , setIsDrop] = useState(false)

    const dropEvent = () =>{
        setIsDrop((test)=>{
            return !test
        }); 
    }

    const listClick = (e , text) =>{
        e.preventDefault();
        dropEvent();
        if(type==="big"){
            navigate(`/category/show/name/${text.replace('/',',')}`)
            text.includes('전체') && (text = '전체보기')
            body[1](()=>text === '전체보기' ? null : {"parent_category" : text});
        }else if(type==="small"){
            let data = {...body[0]};
            data['orderby'] = list.indexOf(text) + 1;
            first[1](text);
            body[1](data);
        }
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


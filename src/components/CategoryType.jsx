import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContext } from '../context/Responsive';

export default function CategoryType({info , title}) {
    const responsive = useContext(ResponsiveContext);
    const [isDrop , idSetDrop] = useState(()=> (title && !responsive) ? false : true);
    let isClass = 'categoryType'
    title || (isClass = isClass + ' mobileFull')
    return (
        <div className={isClass}>
            {title && <h3 onClick={()=>!responsive && idSetDrop(!isDrop)} className={isDrop ? 'active' : null}>{info.title}</h3>}
            {(isDrop) &&
                <ul>
                    {info.typeList.map((c)=>
                        <li key={c.title}>
                            <Link to={`/category/show/${info.type}`}>{c.title}
                                {!!c.count && <mark>{c.count}</mark>}
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}


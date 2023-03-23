import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryType({info , title}) {
    const [isDrop , idSetDrop] = useState(()=> title ? false : true);
    let isClass = 'categoryType'
    title || (isClass = isClass + ' mobileFull')
    return (
        <div className={isClass}>
            {title && <h3 onClick={()=>idSetDrop(!isDrop)} className={isDrop ? 'active' : null}>{info.title}</h3>}
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


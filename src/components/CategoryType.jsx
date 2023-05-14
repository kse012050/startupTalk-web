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
            {/* <h3 onClick={()=>!responsive && idSetDrop(!isDrop)} className={isDrop ? 'active' : null}>{title}</h3> */}
            {title && <h3 onClick={()=>!responsive && idSetDrop(!isDrop)} className={isDrop ? 'active' : null}>{title}</h3>}
            {(isDrop) &&
                <ul>
                    {info.map((data)=>
                        <li key={data.category_id}>
                            <Link to={`/category/show/id/${data.category_id}`}>{data.category}
                                {data.brand_count !== '0' && <mark>{data.brand_count}</mark>}
                            </Link>
                        </li>
                    )}
                </ul>
            }
            {/* {(isDrop) &&
                <ul>
                    {info.typeList.map((c)=>
                        <li key={c.title}>
                            <Link to={`/category/show/${info.type}`}>{c.title}
                                {!!c.count && <mark>{c.count}</mark>}
                            </Link>
                        </li>
                    )}
                </ul>
            } */}
        </div>
    );
}


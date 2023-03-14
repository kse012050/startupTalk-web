import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryType({info , isTitle}) {
    return (
        <div className='categoryType'>
            {isTitle && <h3>{info.title}</h3>}
            <ul>
                {info.typeList.map((c)=>
                    <li key={c.title}>
                        <Link>{c.title}
                            {!!c.count && <mark>{c.count}</mark>}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}


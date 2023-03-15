import React from 'react';

export default function Tab({tabList , content}) {
    const tabMenu = (e) =>{
        let childrenEle = e.target.parentElement.children;
        for(let a = 0; a < childrenEle.length ; a++){
            childrenEle[a].className = ''
        }
        e.target.className = 'active'
        content[1](e.target.getAttribute('data-type'))
    }
    return (
        <ul className='tabBox' onClick={tabMenu}>
            {tabList.map((t , i)=>{
                return <li key={i} className={content[0] === t.path ? 'active' : null} data-type={t.path}>{t.name}{!!t.count && <mark>{t.count}</mark>}</li> 
            })}
        </ul>
    );
}


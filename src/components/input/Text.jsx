import React from 'react';

export default function Text({labelText , placeholderText , children ,name ,body}) {
    const onChange = (e)=>{
        let data = {...body.body}
        if(/\//.test(e.target.value)){
            data[name] = e.target.value;
        }else{
            data[name] = undefined;
        }
        body.setBody(data);
    }
    return (
        <>
            <label htmlFor="identification">{labelText}</label>
            {children}
            <input type="text" id='identification' placeholder={placeholderText} name={name} onChange={onChange}/>
        </>
    );
}


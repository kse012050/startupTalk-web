import React from 'react';

export default function Inquiry({labelText , placeholderText , name , body}) {
    const onChange = (e)=>{
        let data = {...body.body}
        data[name] = e.target.value;
        body.setBody(data);
    }

    return (
        <>
            <label htmlFor="">{labelText}</label>
            <textarea placeholder={placeholderText} name={name} onChange={onChange}>
            </textarea>
        </>
    );
}


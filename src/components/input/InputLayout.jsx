import React from 'react';

export default function InputLayout({children , body , api}) {
    const onSubmit = (e) =>{
        e.preventDefault();
        for (const value of Object.entries(body.body)) {
            if(value[1] === undefined ){return}
        }
        api(body.body).then((data)=>{
            alert(data.error_message)
        });
    }
    return (
        <form className='inputBox' onSubmit={onSubmit}>
            <fieldset>
                {children}
            </fieldset>
        </form>
    );
}


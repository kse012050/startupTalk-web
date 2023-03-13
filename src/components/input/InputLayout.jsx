import React from 'react';

export default function InputLayout({children}) {
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <form className='inputBox' onSubmit={onSubmit}>
            <fieldset>
                {children}
            </fieldset>
        </form>
    );
}


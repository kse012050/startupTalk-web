import React from 'react';

export default function Text({labelText , placeholderText , children}) {
    return (
        <>
            <label htmlFor="identification">{labelText}</label>
            {children}
            <input type="text" id='identification' placeholder={placeholderText}/>
        </>
    );
}


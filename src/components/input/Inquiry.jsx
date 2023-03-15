import React from 'react';

export default function Inquiry({labelText , placeholderText}) {
    return (
        <>
            <label htmlFor="">{labelText}</label>
            <textarea placeholder={placeholderText}>
            </textarea>
        </>
    );
}


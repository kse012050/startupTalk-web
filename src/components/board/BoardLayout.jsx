import React from 'react';

export default function BoardLayout({children}) {
    return (
        <ul className='boardBox mobileFull'>
            {children}
        </ul>
    );
}


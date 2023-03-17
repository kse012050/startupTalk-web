import React from 'react';

export default function ScrollFixed({children , isScroll , type}) {
    let isClass = isScroll ? 'active ' : ''
    isClass = `scrollFixed-${type} ` + isClass;
    return (
        <div className={isClass}>
            <div>
                {children}
            </div>
        </div>
    );
}


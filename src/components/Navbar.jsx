import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <div>
                <h1>제목</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/test'>test</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


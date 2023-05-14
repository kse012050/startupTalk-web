import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <h2>마케팅</h2>
            <ul>
                <li>
                    <Link to={'/marketing/detail/0'}>
                        <mark>Marketing</mark>
                        <p>
                            우리 매장에 딱!<br/>
                            필요한 최적화 마케팅
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={'/marketing/detail/1'}>
                        <mark className='blue'>Consulting</mark>
                        <p>
                            창업톡만의 특별한<br/>
                            파워 전문 컨설팅
                        </p>
                    </Link>
                </li>
            </ul>
        </>
    );
}


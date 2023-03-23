import React from 'react';
import { Link , useNavigate } from 'react-router-dom';

export default function BackLink() {
    const navigate = useNavigate();
    return (
        <Link className="backLink imgBox" onClick={() => navigate(-1)}>이전</Link>
    );
}


import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <section>
            <h2>Oops, that page doesn't exists</h2>
            <Link to="/about">Go to Homepage</Link>
        </section>
    )
}

export default NoMatch;
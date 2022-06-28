import React from 'react';
import './Loading.css';

function Loading() {
    return(
        <section className="loader">
            <div className="item loader-item1"></div>
            <div className="item loader-item2"></div>
            <div className="item loader-item3"></div>
        </section>
    );
}

export { Loading }
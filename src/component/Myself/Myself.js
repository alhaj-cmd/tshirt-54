import React from 'react';
import Special from '../special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h3>MySelf</h3>
            <p><small>House:{house}</small></p>
            <section>
                <Special></Special>
            </section>
        </div>
    );
};

export default Myself;
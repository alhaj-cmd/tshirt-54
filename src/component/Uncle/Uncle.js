import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h4>he is my Uncle</h4>
            <section>
                <Cousin></Cousin>
                <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
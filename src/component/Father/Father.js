import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div>
            <h3>he is my Father</h3>
            <p><small>House : {house}</small></p>
            <section className='flex'>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
                <Myself house={house}></Myself>
            </section>
        </div>
    );
};

export default Father;
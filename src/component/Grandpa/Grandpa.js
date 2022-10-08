import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const RingContext = createContext('Matir Ring')

const Grandpa = () => {
    const house =7;
    return (
        <div className='grandpa'>
            <h3>Grandpa films</h3>
            <section className='flex'>
                <Father house={house}></Father>
                <Aunty house={house}></Aunty>
                <Uncle house={house}></Uncle>
            </section>
        </div>
    );
};

export default Grandpa;
import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Matir Ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    //const house =7;
    return (
     <RingContext.Provider value={[house, setHouse]}>
   <div className='grandpa'>
            <h3>Grandpa films</h3>
            <section className='flex'>
                <Father house={house}></Father>
                <Aunty house={house}></Aunty>
                <Uncle house={house}></Uncle>
            </section>
        </div>
     </RingContext.Provider>
    );
};

export default Grandpa;
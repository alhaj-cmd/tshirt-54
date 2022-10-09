import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse]  = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p>Grift :{house}</p>
            <button onClick={()  =>setHouse(house + 1)}>Increment</button>
            <button onClick={()  =>setHouse(house - 1)}>Decrement</button>
        </div>
    );
};

export default Special;
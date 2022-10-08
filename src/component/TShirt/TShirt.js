import React from 'react';
import './Tshirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <button onClick={() =>handleAddToCart(tshirt) }>Buy Now</button>
        </div>
    );
};

export default TShirt;
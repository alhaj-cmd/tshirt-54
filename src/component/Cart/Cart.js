import React from 'react';
import './cart.css'

const Cart = ({cart,handleRemoveItem}) => {
    let message;
    if(cart.length ===0){
        message=<p>please buy at list one item!!</p>
    }
    return (
        <div>
            <h3 className={cart.length ===2 ? `orange`: `green`}>cart summary</h3>
            <h3>Oder quartity:{cart.length}</h3>
            {
                cart.map(tshirt =><p
                key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>x</button>
                </p>)
            }
            {
                message
            }
            <p>ternary operator</p>
            {
                cart.length===2 ? <p> tumi kineco</p> :<p>erros</p>
            }
             <p>and operator</p>
             {
                cart.length===3 && <p> Have a relax</p>
             }
             <p>or operator</p>
             {
                cart.length===4 || <p> winderfull</p>
             }
        </div>
    );
};

export default Cart;
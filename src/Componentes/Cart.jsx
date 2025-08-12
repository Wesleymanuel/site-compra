import { useState } from 'react';
import './Cart.css';

function Cart(){

    const [cont, setCont] = useState(0)

    function add(){
        setCont(prev => prev+1)       
    }
    function retire(){
        setCont(prev => prev - 1)
    }

    return(
        <div className='cart' >
            <h1>cart</h1>
            <h1>{cont}</h1> 
            <button onClick={add}>cadd</button>
            <button onClick={retire} >retire</button> 
        </div>
    )

}
export default Cart;

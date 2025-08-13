import { useState } from 'react';
import './Cart.css';

function Cart(){

    const [cont, setCont] = useState(0)

    function add(){
        setCont(prev => prev+1)       
    }
    function less(){
        setCont(prev => prev - 1)
    }

    return(
        <main className='main' >
            <div className='contador' >
                <h1>{cont}</h1>
                <button onClick={add} >more</button>
                <button onClick={less} >less</button>
            </div>
        </main>
    )

}
export default Cart;

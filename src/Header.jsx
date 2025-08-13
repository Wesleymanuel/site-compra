import { Link } from 'react-router-dom';
import Cards from './Cards';
import './Header.css'

function Header(){

    return(
       <div> 
        <div className='head' >
            <h1>teste</h1>
            <input type="text" />
            <ul className='ul'>
                <div className='box' >
                    <li>carrinho</li>
                </div>
                <div className='box'>
                    <li><Link to="/login" >conta</Link></li>
                </div>
            </ul>
        </div>    
            <Cards/>
       </div> 
    )

}

export default Header;
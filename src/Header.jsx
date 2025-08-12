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
                <li>carrinho</li>
                <li><Link to="/login" >conta</Link></li>
            </ul>
        </div>    
            <Cards/>
       </div> 
    )

}

export default Header;
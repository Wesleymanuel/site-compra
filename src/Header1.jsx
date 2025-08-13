import { VscAccount } from 'react-icons/vsc';
import { CgCrowdfire } from 'react-icons/cg'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import Cards from "./Cards";
import './Header1.css'

function Header1(){

    return(
    <div> 
        <div className="head2" >
            <div className='logo'>
             <CgCrowdfire className='lo' size={40}/>  <h1>fire</h1>
            </div>
            <input type="text" className='input' />
            <ul className='list' >
                <div className='car' >
                    <li><Link className="link" to='/login' ><FaCartShopping size={23}/>car</Link></li>
                </div>
                <div className='cont' >
                    <li><Link className="link" to='/login'> <VscAccount size={23} /> conta</Link></li>
                </div>
            </ul>
            
        </div>
        <Cards/>
    </div> 
    )

}

export default Header1;
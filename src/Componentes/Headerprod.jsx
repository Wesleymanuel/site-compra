import { Link } from 'react-router-dom';
import './Head2.css'

function Headerprod(){

    return(
        <div className="head2" >
            <h1>teste</h1>
            <input type="text" className='input' />
            <ul className='list' >
                <div className='car' >
                    <li>car</li>
                </div>
                <div className='cont' >
                    <li><Link to='/login' >conta</Link></li>
                </div>
            </ul>
        </div>
    )

}

export default Headerprod;
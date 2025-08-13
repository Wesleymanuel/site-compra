import { Link } from 'react-router-dom';
import './Cards.css';

function Cards(){

    return(
        <div className="cards" >
            <div className="card1" >
                <div className='nav' >
                    <h3><Link className='lin' to='/card1' >navigator</Link></h3>
                </div>
            </div>
            <div className="card2" >
                <div className='nav' >
                    <h3><Link className='lin' to='/card1' >navigator</Link></h3>
                </div>
            </div>
            <div className="card3" >
                <div className='nav' >
                    <h3><Link className='lin' to='/card1' >navigator</Link></h3>
                </div>
            </div>
            <div className="card4" >
                <div className='nav' >
                    <h3><Link className='lin' to='/card1' >navigator</Link></h3>
                </div>
            </div>
        </div>
    )

}
export default Cards;
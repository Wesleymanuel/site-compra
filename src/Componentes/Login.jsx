import './Login.css'
function Login(){
    return(
        <div className="login" >
            <div className='forms' >
                <input className='name' type="text" placeholder="name" />
                <input className='password' type="password" placeholder="senha" />
                <input className='city' type="text" placeholder="city" />
                <input className='fone' type="number" placeholder="fone"/>
                <input className='house' type="number" placeholder="house" />
                <input className='cpf' type="number" placeholder="xxx.xxx.xxx-xx" />
                <button className='logar'>logar</button>
                </div>
        </div>
    )
}
export default Login;
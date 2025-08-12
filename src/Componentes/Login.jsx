import './Login.css'
function Login(){
    return(
        <div className="login" >
            <div className='forms' >
                <div className='name' >
                    <h4>name:</h4>
                    <input type="text" placeholder="name" />
                </div>
                <div className='password' >
                    <h4>password:</h4>
                    <input  type="password" placeholder="senha" />
                </div>
                <div className='city' >
                    <h4>city:</h4>
                    <input  type="text" placeholder="city" />
                </div>
                <div className='fone' >
                    <h4>number:</h4>
                    <input  type="number" placeholder="fone"/>
                </div>
                <div className='house' >
                    <h4>house:</h4>
                    <input  type="number" placeholder="house" />
                </div>
                <div className='cpf' >
                    <h4>CPF:</h4>
                    <input  type="number" placeholder="xxx.xxx.xxx-xx" />
                </div>
                <button className='logar'>logar</button>
                </div>
        </div>
    )
}
export default Login;
import './Api.css';
import { useState,useEffect } from "react";

function Api(){
    
    const [produtos , setProdutos] = useState([])

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/?name=morty")
        .then(res=>res.json())
        .then(res=>{
            setProdutos(res.results || [])
        })
    }, [])
    
    return(
        <div className='api' >
           {produtos.map((prod) => (
            <div className='desing' >
             <img  className='prodimg' src={prod.image} alt="fotos" />
             <h4 className='prod' >{`produto: ${prod.name}`}</h4>
             <h4 className='value' >{`preco: ${prod.id} R$`}</h4>
             <button>addcar</button>
            </div>
           ))}
        </div>
    )
}

export default Api;
import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'

const index = () => {
    const[filmes, setFilmes] = useState([])

    useEffect(()=>{
        apiFilmes.get('/movie/popular').then(resultado =>{
            setFilmes(resultado.data.results)
        })
    }, [])
  return (
    <Pagina titulo='Filmes'>

        {filmes.map(item => (
            <p>{item.title}</p>
            
            
        ))}
    </Pagina>
  )
}

export default index
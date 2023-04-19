import React from 'react'
import Pagina from '../../components/pagina'
import apiFilmes from '../../services/apiFilmes'

const Detalhes = ({filme}) => {
  return (
    <Pagina titulo={filme.title}>
    <div>Detalhes</div>
    </Pagina>
  )
}

export default Detalhes


export async function getServerSideProps(context){

    const id = context.params.id

    const resultado=await apiFilmes.get("/movie/"+id)
    const filme = resultado.data
    return{
      props:{filme},
    }
  }
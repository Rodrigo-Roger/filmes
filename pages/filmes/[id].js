import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Pagina from '../../components/pagina'
import apiFilmes from '../../services/apiFilmes'

const Detalhes = ({filme}) => {
  return (
    <Pagina titulo={filme.title}>
    
    <Row>
        <Col >
        <Card className=''></Card>
        </Col>
    </Row>
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
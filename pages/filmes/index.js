import React ,{ useEffect, useState }  from 'react'
import Pagina from '../../components/pagina'
import apiFilmes from '../../services/apiFilmes'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    apiFilmes.get('/movie/popular').then(resultado=>{
      setFilmes(resultado.data.results)
    })

  }, [])

  return (
    <Pagina titulo="Página de Filmes">

      <Row md={3}>

      {filmes.map(item => (
        <Col key={item.id}>
        <Card className='mb-3'>
          <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}></Card.Img>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Lançamento: {item.release_date}</Card.Text>
            <Card.Text>Nota: {item.vote_average}</Card.Text>
            <Link href={'/filmes/' +item.id}className='btn btn-danger'>Detalhes</Link>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>


    </Pagina>
  )
}

export default index

export async function getServerSideProps(context){
  const resultado=await apiFilmes.get("/movie/popular")
  const filmes = resultado.data.results
  return{
    props:{filmes},
  }
}
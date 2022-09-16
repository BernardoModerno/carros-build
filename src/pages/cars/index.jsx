import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import Head from "next/head"
import { toast } from 'react-toastify'
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Wrapper } from '../../components/wrapper';
import { setupAPIClient } from '../../services/api'

export default  function Cars() {

  const router = useRouter();
  const [termoBusca, setTermoBusca] = useState('');
  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    async function loadCars() {
        const apiClient = setupAPIClient();
  
        const response = await apiClient.get('/cars');

        /* console.log(data) */
        setCarsList(response.data)
    }
      
    loadCars()
}, [])


  async function del (_id) {
    if (window.confirm('Você realmente deseja excluir esse carro?')) {
        const apiClient = setupAPIClient();
        await apiClient.delete(`cars/${_id}`);

        toast.success('Carro excluído!')
        
        setCarsList(carsList.filter(car => car._id !== _id));
        
    }
  }


  return (
    <>
        <Head>
             <title>Carros Disponíveis</title>
        </Head>
          <Wrapper>
              <Link href='/cars/createCar'>
                <Button variant='outline-success mt-4' >
                    Novo Carro
                </Button>
              </Link>
            <InputGroup className='mt-3 mb-3'>
                <InputGroup.Text>Buscar:</InputGroup.Text>
                <FormControl
                    onChange={(e) => {setTermoBusca(e.target.value)}}
                    placeholder='Buscar por nome do carro'
                />
            </InputGroup>
            <table className='table table-striped table-hover'>
                <thead className='table-dark mt-3'>
                    <tr>
                        {/* <th scope='col'>ID</th> */}
                        <th scope='col'>Título</th>
                        <th scope='col'>Brand</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'>Ano</th>
                        <th scope='col'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                   {carsList.filter((car) => {
                    if (termoBusca == '') {
                        return car
                    } else if (car.title.toLowerCase().includes(termoBusca.toLowerCase())) {
                        return car
                    }
                   })
                   .map(car => (
                        <tr key={car._id}>
                            <td>{car.title}</td>
                            <td>{car.brand}</td>
                            <td>{car.price}</td>
                            <td>{car.age}</td>
                            <td>
                                <div>
                                       <Button
                                           variant='btn btn-sm btn-outline-primary me-2'
                                           onClick={() => router.push("cars/editCar/" + car._id)}
                                       >
                                           Editar
                                       </Button>
                                       <Button 
                                           variant='btn btn-sm btn-outline-danger me-2'
                                           onClick={() => del(car._id)}>
                                           Excluir
                                       </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </Wrapper>
        </>
  )
}

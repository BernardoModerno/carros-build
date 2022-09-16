import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { setupAPIClient } from '../../../services/api'
import { Button, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import { Wrapper } from '../../../components/wrapper';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';
import Router from 'next/router';

export default function EditCar(){
    const router = useRouter();
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
      async function loadCars() {
          const apiClient = setupAPIClient();
    
          const response = await apiClient.get(`cars/${router.query._id}`);
          setTitle(response.data.title)
          setBrand(response.data.brand)
          setPrice(response.data.price)
          setAge(response.data.age)
      }
        
      loadCars()
  }, [])
  
    async function handleEdit(event){
      event.preventDefault();
  
      const apiClient = setupAPIClient();

      await apiClient.put(`cars/${router.query._id}`, {
        title,
        brand,
        price,
        age,
    });
  
      toast.success('Carro editado!')
  
      setTitle('');
      setBrand('')
      setPrice('')
      setAge('')
      Router.push('/cars')
  
    }
    return (
      <>
         <Head>
                  <title>Editar Carro</title>
         </Head>
         <Wrapper>
           <Container className='container text-center mt-5'>
                   <Form onSubmit={handleEdit}>
                     <div className='form-signin w-50 m-auto'>
                       <Form.Group className="mb-3" controlId="nome">
                         <Form.Label>Título do Carro:</Form.Label>
                         <Form.Control type='text' defaultValue={title} value={title} onChange={ (e) => setTitle(e.target.value)} />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="nome">
                         <Form.Label>Brand:</Form.Label>
                         <Form.Control type='text' defaultValue={brand} value={brand} onChange={ (e) => setBrand(e.target.value)} />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="nome">
                         <Form.Label>Price:</Form.Label>
                         <Form.Control type='text' defaultValue={price} value={price} onChange={ (e) => setPrice(e.target.value)} />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="nome">
                         <Form.Label>Age:</Form.Label>
                         <Form.Control type='text' defaultValue={age} value={age} onChange={ (e) => setAge(e.target.value)} />
                       </Form.Group>
                     </div>
                     <button className="w-50 btn btn-lg btn-outline-success" type="submit">Editar Carro</button>
                   </Form>
                   <Link href='/cars'>
                     <Button className='w-50 btn btn-lg btn-danger mt-2' >
                       Retornar
                     </Button>
                   </Link>
           </Container>
        </Wrapper>
      </>
    )
  }
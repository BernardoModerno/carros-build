import React, { useState } from 'react'
import Head from 'next/head';
import { Button, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import { Wrapper } from '../../../components/wrapper';
import { toast } from 'react-toastify'
import { setupAPIClient } from '../../../services/api'

export default function CreateCar(){
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [age, setAge] = useState('')

  async function handleRegister(event){
    event.preventDefault();

    if(title === ''){
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post('/', {
      title: title,
      brand: brand,
      price: price,
      age: age
    })

    toast.success('Carro cadastrado com sucesso!')

    setTitle('');
    setBrand('');
    setPrice('');
    setAge('');

    Router.push('/cars')

  }
  return (
    <>
       <Head>
                <title>Novo Carro:</title>
       </Head>
       <Wrapper>
         <Container className='container text-center mt-5'>
                 <Form onSubmit={handleRegister}>
                   <div className='form-signin w-50 m-auto'>
                        <Form.Group className="mb-2" controlId="titulo">
                           <Form.Label>Título do Carro:</Form.Label>
                           <Form.Control type='text' placeholder='Digite título do carro:' value={title} onChange={ (e) => setTitle(e.target.value)} />
                         </Form.Group>
                         <Form.Group className="mb-2" controlId="description">
                           <Form.Label>Brand:</Form.Label>
                           <Form.Control type='text' placeholder='Digite o Brand do Carro:' value={brand} onChange={ (e) => setBrand(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="description">
                           <Form.Label>Preço:</Form.Label>
                           <Form.Control type='text' placeholder='Digite o Preço do Carro:' value={price} onChange={ (e) => setPrice(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="description">
                           <Form.Label>Ano:</Form.Label>
                           <Form.Control type='text' placeholder='Digite o Ano do Carro:' value={age} onChange={ (e) => setAge(e.target.value)} />
                        </Form.Group>
                   </div>
                   <button className="w-50 btn btn-lg btn-outline-success" type="submit">Cadastrar Carro</button>
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
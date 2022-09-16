import logoImg from '../../public/carros.svg';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Form } from 'react-bootstrap';

export default function Home() {
  return (
    <>
       <Head>
          <title>Carros Diversos</title>
      </Head>
      <div style={{backgroundColor: "#B0C4DE", 
                  minHeight: "750px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                  }}>
       <Container className='container text-center'>
         <Image src={logoImg} alt="Vendas" width="300" height="150"/>
         <br/>
         <Link href='/cars'>
            <button className="w-50 btn btn-lg btn-secondary mt-2" >Catálogo de Carros</button>
         </Link>
       </Container>
       </div>
    </>
  )
}

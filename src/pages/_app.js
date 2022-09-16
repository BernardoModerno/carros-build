import '../../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
   </>
  )
}

export default MyApp

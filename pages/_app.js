import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../styles/globals.css'
import '../styles/Template.css'
import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/GaleriaPrincipal.css'
import '../styles/AlMyMasL.css'
import '../styles/LaCorte.css'
import '../styles/Slideropinion.css'
import '../styles/Municipios.css'
import '../styles/Multimedia.css'
import '../styles/NotasSoft.css'
import '../styles/Nota.css'
import '../styles/Publicidad.css'
import '../styles/Blogs.css'
import '../styles/Opinion.css'
import '../styles/Pagination.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

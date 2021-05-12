import Template from '../../template/template'
import Head from 'next/head'
import loadable from '@loadable/component'

const PaginationOpinion = loadable(() => import('../../componentes/PaginationOpinion/PaginationOpinion'))

export default function Seccion(){
    return(
        <Template>
            <Head>
                <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type": "Organization",
                    "name": "e-consulta.com",
                    "alternateName": "e-consulta.com",
                    "url": `${process.env.eConsultaCanonical}`,
                    "logo": {
                    "@type":"ImageObject",
                    "url":"https://www.e-consulta.com/assets/images/logo_02.png"
                    },
                    "sameAs": [
                    "https://www.facebook.com/econsulta.noticias",
                    "https://twitter.com/e_consulta",
                    "https://www.youtube.com/user/videoeconsulta"
                    ]
                })}}
                />
                <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context":"https://schema.org",
                    "@type": "WebPage",
                    "headline": "e-consulta.com | Periódico Digital de Noticias de Puebla | México 2019",
                    "description": "e-consulta – Periódico Digital de Noticias de Puebla,Periódico Digital e-consulta, sitio de Referencia Obligada en noticias minuto por minuto de Puebla, Tlaxcala, Oaxaca Veracruz y el mundo, con secciones de Política, Gobierno, Ciudad, Educación, Universidades, Salud, Economía, Sociedad, Ecología, Seguridad, Nación, Mundo, Cultura, Turismo, Ciencia, Columnas, Artículos, cartones, videos, fotogalerías, gráficos, foros, blogs, chats, redes sociales, Twitter, Facebook, comentarios en notas, obituarios",
                    "publisher": {
                    "@type": "Organization",
                    "name": "e-consulta.com",
                    "url": `${process.env.eConsultaCanonical}`,
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.e-consulta.com/assets/images/logo_02.png"
                    },
                    "sameAs": [
                        "https://www.facebook.com/econsulta.noticias",
                        "https://twitter.com/e_consulta",
                        "https://www.youtube.com/user/videoeconsulta"
                    ]
                    }
                })}}
                />
            </Head>
            <PaginationOpinion />   
        </Template>
    )
}

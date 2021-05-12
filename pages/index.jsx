import React, { useEffect } from 'react'
import Head from 'next/head'
import Tempalte from '../template/template'
import Ad from 'react-google-publisher-tag'
import loadable from '@loadable/component'

const GaleriaPrincipal = loadable(() => import('../componentes/GaleriaPrincipal/GaleriaPrincipal'))
const AlMyMasL = loadable(() => import("../componentes/AlMyMasL/AlMyMasL"))
const LaCorte = loadable(() => import("../componentes/LaCorte/LaCorte"))
const Municipios = loadable(() => import("../componentes/Municipios/Municipios"))
const SliderOpinion = loadable(() => import("../componentes/Slideropinion/Slideropinion"))
const Multimedia = loadable(() => import("../componentes/Multimedia/Multimedia"))
const NotasSoft = loadable(() => import("../componentes/NotasSoft/NotasSoft"))
const Blogs = loadable(() => import("../componentes/Blogs/Blogs"))

export default function Home() {
    useEffect(() =>{
        const p = document.createElement("script");
        p.setAttribute("src", "https://securepubads.g.doubleclick.net/tag/js/gpt.js")
        p.setAttribute("async", "true")
        document.head.appendChild(p)
    }, [])
    return (
        <Tempalte>
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
            <div className="content-publicidad" style={{width: '320px', height: '50px', margin: '0 auto'}}>
                <Ad path="/138222292/MovilPortada_FullTop_320x50" id="div-gpt-ad-1595634310559-0" format="MOBILE_BIG" />
            </div>
            <GaleriaPrincipal />
            <div className="content-publicidad" style={{width: '320px', height: '50px', margin: '0 auto'}}>
                <Ad path="/138222292/MoPo_320x50_2nd_new" id="div-gpt-ad-1595638274390-0" format="MOBILE_BIG" />
            </div>
            <AlMyMasL />
            <LaCorte />
            <Municipios />
            <div className="content-publicidad" style={{width: '300px', height: '250px', margin: '0 auto'}}>
                <Ad path="/138222292/MoPo_300x250_DespuesCorte" id="div-gpt-ad-1617048661461-0" format="RECTANGLE" />
            </div>
            <SliderOpinion />
            <Multimedia />
            <NotasSoft path="deportes" title="Deportes" />
            <NotasSoft path="virales" title="Virales" />
            <NotasSoft path="nacionymundo" title="Nacion Y Mundo" />
            <Blogs />
        </Tempalte>
    )
}

import React, { useEffect } from 'react'
import Head from 'next/head'

import Header from '../componentes/Header/Header';
import Footer from '../componentes/Footer/Footer'

export default function Template({children}){
    return(
        <div className="pt-5">
            <Head>
                <title>m.e-consulta.com | Periódico Digital de Noticias de Puebla | México 2021</title>
                <meta name="description" content="Periódico Digital de Noticias de Puebla" />
                <link rel="apple-touch-icon" sizes="57x57" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="https://www.e-consulta.com/assets/images/favicons/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="https://www.e-consulta.com/assets/images/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="https://www.e-consulta.com/assets/images/favicons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="https://www.e-consulta.com/assets/images/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="https://www.e-consulta.com/assets/images/favicons/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="https://www.e-consulta.com/assets/images/favicons/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 main-heading">
                        <div className="pt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
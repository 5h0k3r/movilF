import React, { useEffect, useState } from 'react'
import Template from '../../../../template/template'
import ReactHtmlParser from 'react-html-parser'
import Slider from "react-slick"
import Head from 'next/head'
import Image from 'next/image'
import Ad from 'react-google-publisher-tag'
import Link from 'next/link'
import loadable from '@loadable/component'

const GaleriaPrincipal = loadable(() => import('../../../../componentes/GaleriaPrincipal/GaleriaPrincipal')) 
const Almomento = loadable( () => import('../../../../componentes/AlMyMasL/AlMyMasL'))
 
function Nota({data}){

    useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "/static/widgets.js")
        s.setAttribute("async", "true")
        document.head.appendChild(s)

        const p = document.createElement("script");
        p.setAttribute("src", "https://securepubads.g.doubleclick.net/tag/js/gpt.js")
        p.setAttribute("async", "true")
        document.head.appendChild(p)
        
        const r = document.createElement("script");
        r.setAttribute("src", "/static/facebook.js")
        r.setAttribute("async", "true")
        document.head.appendChild(r)
        
        /*const ADCOMPONENT = <Ad path="/138222292/test_0__container__" id="div-gpt-ad-1595629171961-0" format="RECTANGLE" />
        //extracción de los parrafos
        let ps = document.getElementById("body_note").querySelectorAll("p")

        const adcomponent = <div id="div-gpt-ad-1595629171961-0" style={{ width: '300px', height: '250px' }} />

        let prueba = <div dangerouslySetInnerHTML={{ __html: adcomponent }} />
        console.log(prueba)
        
        for(var i = 0; i<ps.length; i++){
        }
        console.log(ps)*/

    }, [])
    const content = data.data
    const { src_imgs } = data.data
    const html = content.cuerpo
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: false
    }
    return(
        <Template>
            <Head>
                <link href="https://m.e-consulta.com/assets/css/fontello-z/css/fontello.css?v=1" rel="stylesheet"></link>
                {ReactHtmlParser(content.seo)}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content.nota_schema }} ></script>
            </Head>
            <div className="content-publicidad" style={{width: '320px', height: '50px', margin: '0 auto'}}>
                <Ad path="/138222292/MobileNote_FullTop_320x50" id="div-gpt-ad-1595629171961-0" format="MOBILE_BIG" />
            </div>
            <div className="row" >
                {src_imgs.length > 1 ? (
                    <Slider {...setting}>
                        {src_imgs.map((image, index) =>(
                            <Image
                                className="img-fluid lazyload"
                                width={360}
                                height={240}
                                src={image.img_uri.replace('public://', process.env.eConsultaImagenes)}
                                alt={content.title}
                                key={index}
                            />
                        ))}
                    </Slider>
                ) : (
                        <Image
                            className="img-fluid lazyload"
                            width={360}
                            height={240}
                            src={src_imgs[0].img_uri.replace('public://', process.env.eConsultaImagenes)}
                            alt={content.title}
                        />
                )}
            </div>
            
            <div className={`row mx-2  ${content.SECCION.toLowerCase()}`}>
                <div className="social-media mb-2 mt-2">
                    <div className="social-element">
                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=${content.URL_ALIAS}`} target="_blank">
                        <span className="face" style={{width: '25%'}}>
                        <i className="icon-facebook-1"></i>
                        </span>
                    </Link>
                    </div>
                    <div className="social-element">
                    <Link href={`https://twitter.com/intent/tweet?text=${encodeURI(content.title)}&url=${encodeURI('https://www.e-consulta.com/' + content.URL_ALIAS)}&via=e_consulta`} target="_blank">
                        <span className="twit" style={{width: '25%'}}>
                        <i className="icon-twitter"></i>
                        </span>
                    </Link>
                    </div>
                    <div className="social-element">
                    <Link href={`whatsapp://send?text=${encodeURI(content.title)} - [Leer] ${'https://www.e-consulta.com/' + content.URL_ALIAS}`} data-action="share/whatsapp/share">
                        <span className="whats" style={{width: '25%'}}>
                        <i className="icon-whatsapp"></i>
                        </span>
                    </Link>
                    </div>
                    <div className="social-element">
                    <Link href={`tg://msg_url?url=${'https://www.e-consulta.com/' + content.URL_ALIAS}`} target="_blank">
                        <span className="tele" style={{width: '25%'}}>
                        <i className="icon-telegram"></i>
                        </span>
                    </Link>
                    </div>
                </div>
                <div className="separador mt-2">
                    <span className="nota-seccion">{content.SECCION}</span>
                </div>
                <div className="nota-title">
                    <h1><b>{content.title}</b></h1>
                </div>
                <div className="nota-autor byline">
                    Por <Link href={'https://www.e-consulta.com/autor/' + content.AUTOR}>{content.AUTOR}</Link>  | {content.date_torender} | {content.credit_img}
                </div>
                {content.sumario ? (
                    <div className="nota-sumario">
                        {content.sumario}
                    </div>
                ) : <></>}
                <div className="content-publicidad" style={{width: '300px', height: '250px', margin: '0 auto'}}>
                    <Ad path="/138222292/test_0__container__" id="div-gpt-ad-1595629171961-0" format="RECTANGLE" />
                </div>
                <div className="txtview text-justify note-body" id="body_note" >
                    {/*ReactHtmlParser(html)*/}
                    {
                        html.map( (p, index) =>(
                            index == 3 ? 
                            (
                                [<Ad path="/138222292/test_0__container__" id="div-gpt-ad-1595629171961-0" format="RECTANGLE" /> , ReactHtmlParser(p + '</p>') ]
                            )
                            :
                            (
                                ReactHtmlParser(p + '</p>') 
                            )
                        ) )
                    }
                </div>
                <div className="tags-list">
                    {
                        content.tags.map( (tag, index) =>(
                            <Link href={process.env.eConsultaCanonical+'tags/'+tag.name} key={index}>
                                {tag.name}
                            </Link>
                        ) )
                    }
                </div>
            </div>
            <div className="">
                <div className="fb-comments" data-href={"https://www.e-consulta.com/" + content.URL_ALIAS} data-numposts="10" data-width=""></div>
                <div id="fb-root"></div>
                <script dangerouslySetInnerHTML={{ __html: '(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7&appId=522731284465449";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook - jssdk"));' }}></script>
            </div>
            
            
            <div className="relativas">
                <div className="r-head">
                    Notas relacionadas
		        </div>
                {content.relativas.map((item, index) => (
                    <div className="r-el pt-4" key={index}>
                        <Link href={process.env.eConsultaCanonical + item.alias}>
                        <a>
                            <div className="r-image text-center">
                                <Image className="lazyload" src={item.img_uri.replace('public://', process.env.eConsultaImagenes)} width={300} height={200} alt={ item.title }/>
	                        </div>
                            <div className="r-title">{item.title}</div>
	                    </a>
                        </Link>
                        <div className="r-space"></div>
	                </div>
                ))}
            </div>
            <Almomento/>
            <div className="row">
                <div className="com-xs-12 text-center text-white mb-2 en-protada">
                    <h3><b>EN PORTADA</b></h3>
                </div>
            </div>
            <GaleriaPrincipal />
        </Template>
    )
}

export async function getServerSideProps({params}){
    const { fecha, seccion, slug } = params
    const nota = fecha+"/"+seccion+"/"+slug
    const res = await fetch(process.env.eConsultaNota+nota)
    const data = await res.json()
    return{
        props: {
            data: data
        }
    }
}

export default Nota
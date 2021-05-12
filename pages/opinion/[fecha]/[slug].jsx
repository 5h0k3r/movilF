import React, { Fragment, useEffect } from 'react'
import Template from '../../../template/template'
import ReactHtmlParser from 'react-html-parser';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LaCorte from '../../../componentes/LaCorte/LaCorte'
import OpinionSlider from '../../../componentes/Slideropinion/Slideropinion'
import Masopinion from '../../../componentes/Masopinion/Masopinion'


function Opinion({ data }) {
    const content = data.data
    const html = content.cuerpo
    console.log(content)
    return (
        <Template>
            <Head>
                <title>{content.title}</title>
                <link href="https://m.e-consulta.com/assets/css/fontello-z/css/fontello.css?v=1" rel="stylesheet"></link>
            </Head>
            <div className="mt-4">
                <div className="nota-title col-xs-12">
                    <h1><b>{content.title}</b></h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>{content.AUTOR}</p>
                    </div>
                    <div className="float-left note-sumary note-sumary-cont" style={{width: '69%'}}>
                        <p><b>{content.sumario}</b></p>
                    </div>
                    <div className="float-rigth" style={{width: '30%'}}>
                        <Image
                            className="img-fluid float-rigth"
                            width={150}
                            height={150}
                            src={content.src_imgs.replace('public://', process.env.eConsultaImagenes)}
                            alt={content.title}
                        />
                    </div>
                    <div className="col-xs-12 semblanza">
                        {ReactHtmlParser(content.description)}
                    </div>
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
                        <Link href={`whatsapp://send?text=${encodeURI(content.title)} - [Leer] ${'https://www.e-consulta.com/' + content.URL_ALIAS}" data-action="share/whatsapp/share`}>
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
                </div>
                <div className="txtview text-justify" >
                    {/*ReactHtmlParser(html)*/}
                    {html.map((p, index) =>(
                        index == 3 ? <Masopinion data={content.relativas} /> : ReactHtmlParser(p + '</p>') 
                    ))}
                </div>
            </div>
            <OpinionSlider/>
            <LaCorte />
        </Template>
    )
}

export async function getServerSideProps({ params }) {
    const { fecha, slug } = params
    const nota = fecha + "/" +  slug
    const res = await fetch('http://da21w.e-tlaxcala.mx/index.php/opinion/' + nota)
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}

export default Opinion
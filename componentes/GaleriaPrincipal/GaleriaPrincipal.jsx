import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import Slider from "react-slick";

export default function MainNote(){
    const { data, error } = useSWR(process.env.eConsultaMainNota)
    if (!data) return (<div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>)
    const notaP = data.response.slice(0, 1)
    const eliminado = data.response.shift()
    const galeria = data.response
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        rows: 1,
        slidesPerRow: 2,
        lazyLoad: true,
        arrows: false
    }
    return(
        <>
            {notaP.map((notap, index) =>(
                <Link href={`/${notap.alias}`} key={index}>
                    <div className="card card-main-note text-white" >
                        <Image src={notap.img_uri.replace('public://', process.env.eConsultaImagenPrincipal)} className="card-img card-img-main-note lazyload" alt={notap.title} layout='fill' />
                        <div className="card-img-overlay card-title-main-note__article">
                            <h3 className="card-title-main-note__title">{notap.title}</h3>
                        </div>
                    </div>
                </Link>
            ))}
            <div className="row galeria-s">
                <Slider {...setting}>
                    {galeria.map((nota, index) =>(
                            <Link href={`/${nota.alias}`} key={index}>
                                <div className="card card-galeria text-white">
                                    <Image src={nota.img_uri.replace('public://', process.env.eConsultaImagenSecundaria)} className="card-img card-img-galeria lazyload" alt={nota.title} layout='fill' />
                                    <div className="card-img-overlay card-title-galeria__article">
                                        <h2 className="card-title card-title-galeria__title">{nota.title}</h2>
                                    </div>
                                </div>
                            </Link>
                    ))}
                </Slider>
            </div>
        </>
    )
}

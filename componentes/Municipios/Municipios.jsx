import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import useSWR from 'swr'
import Slider from "react-slick";

export default function Municipios(){
    const { data, error } = useSWR(process.env.eConsultaMunicipios)
    if (!data) return <div>loading...</div>
    const municipios = data.data
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        rows: 1,
        slidesPerRow: 1,
        lazyLoad: true,
        arrows: false
    }
    return(
        <>
            <div className="separador-municipios">
                <div className="line-municipios"></div>
                <div className="title-municipios">
                    <div className="municipios-logo"></div>
                    <div className="name-municipios">Municipios</div>
                </div>
            </div>
            <div className="row galeria-muni">
                <Slider {...setting}>
                    {municipios.map((municipio) =>(
                        <Link href={`/${municipio.alias}`} key={municipio.nid}>
                            <div className="card card-first-slider text-white" >
                                <Image 
                                    src={municipio.img_uri.replace('public://', process.env.eConsultaImagenes)} 
                                    className="card-img card-img-first-slider lazyload" 
                                    alt={municipio.title}
                                    layout="fill"
                                />
                                <div className="card-img-overlay card-title-first-slider__article">
                                    <h2 className="card-title card-title-first-slider__title">{municipio.title}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </>
    )
}
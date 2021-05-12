import React from 'react'
import Slider from "react-slick"
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

function Slideropinion() {
    const { data, error } = useSWR(process.env.eConsultaOpinionModule)
    if (!data) return <div>loading...</div>
    const items = data.data
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        rows: 3,
        slidesPerRow: 1,
        arrows: false,
        lazyLoad: true
    }
    return (
        <>
            <div className="separador">
                <div className="line"></div>
                <div className="title">
                    <div className="opinion-logo"></div>
                    <div className="name">Opinión</div>
                </div>
            </div>
            <div className="opinion-seccion">
                <div className="item">
                    <Slider {...setting}>
                        {items.map((item, index) => (
                            <div className="opinion-el" key={index}>
                                <div className="rostro">
                                    <div className="rotro-img">
                                        <Image
                                            className="lazyload"
                                            src={item.img_url.replace('public://', process.env.eConsultaImagenes)}
                                            alt={item.autor}
                                            width="91"
                                            height="91"
                                        />
                                    </div>
                                </div>
                                <div className="cwrap">
                                    <div className="title">
                                        <Link href={item.url_alias}>
                                            <p>{item.title}</p>
                                        </Link>
                                    </div>
                                    <div className="autor">
                                        <p>{item.autor}</p>
                                    </div>
                                </div>
                            </div>   
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Slideropinion
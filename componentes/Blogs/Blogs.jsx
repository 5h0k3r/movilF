import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import Link from 'next/link'
import useSWR from 'swr'


export default function Blogs() {
    const { data, error } = useSWR(process.env.eConsultaBlogs)
    if (!data) return (<div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>)
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        rows: 1,
        slidesPerRow: 1,
        lazyLoad: true
    }
    return (
        <>
            <div className="separador">
                <div className="line">
                </div>
                <div className="title">
                    <div className="opinion-logo"></div>
                    <div className="name">Blogs</div>
                </div>
            </div>
            <div className="blog-car-container">
                <div className="blog" id="bloovs">
                    <Slider {...setting} key={1}>
                        {data.data.map((item, index) => (
                            <div className="note" key={index}>
                                <div className="nota-wrap">
                                    <Link href={item.link} target="_blank">
                                        <a>
                                            <Image 
                                                src={item.img.replace('public://', process.env.eConsultaImagenes)}
                                                title={item.nombre}
                                                layout="fill"
                                                className="lazyload"
                                            />
                                            <h2>{item.nombre}</h2>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

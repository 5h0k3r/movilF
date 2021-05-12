import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Genericitem from '../Genericitem/Genericitem'
import Slider from "react-slick"

export default function NotasSoft({ path, title}) {

    const [notas, setNotas] = useState([])
    const [fst, setFst] = useState([])
    const [snd, setSnd] = useState([])

    const obtenerNotas = async () => {
        const res = await axios.get(process.env.eConsultaNotasSoft+path)
        const notasD = await res.data
        setNotas(notasD.data)

        setFst(notasD.data.slice(0, 1))
        const eliminado = notasD.data.shift()
        setSnd(notasD.data)

    }
    useEffect(() => {
        obtenerNotas()
    }, [])
    /* SETTINGS for slider/slick */
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        rows: 1,
        slidesPerRow: 3,
        lazyLoad: true,
        arrows: false
    }

    return(
        <div className="virales-module mt-4 mb-4" >
            <div className="separador">
                <div className="line"></div>
                <div className="title">
                    <div className="name">{title}</div>
                </div>
            </div>
            <div>
                {fst.map((item, index) => (
                    <Fragment key={index}>
                        <Genericitem 
                            title={item.title} 
                            img={item.img_uri.replace('public://', process.env.eConsultaImagenes)}
                            src={process.env.eConsultaCanonical+item.alias}
                            count={index}
                        />
                    </Fragment>
                ))}
            </div>
            <div className="row">
                <Slider {...setting}>
                    {snd.map((item, index) => (
                        <Fragment key={index}>
                            <Genericitem
                                title={item.title}
                                img={item.img_uri.replace('public://', process.env.eConsultaImagenes)}
                                src={process.env.eConsultaCanonical+item.alias}
                                count={index + 1} 
                            />
                        </Fragment>
                    ))}
                </Slider>
            </div>
        </div>
            
    )
}

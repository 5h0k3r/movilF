import React from 'react'
import Link from 'next/link'

export default function Masopinon({data}) {
    const relativas  = data
    console.log(relativas)
    return (
        <div className="note-misma-pluma-cont">
            <div className="note-misma-pluma">
                <h3>Más del autor</h3>
                <ul className="pluma-list">
                {relativas.map( (rel, index) =>(
                        <li className="itm-pluma" key={index}>
                            <Link target="_parent" href={process.env.eConsultaCanonical+rel.alias}>
                                <a className="itm-pluma-txt">
                                   - {rel.title}
                                </a>
                            </Link>
                        </li>
                ))}
                </ul>
            </div>
        </div>
    )
}
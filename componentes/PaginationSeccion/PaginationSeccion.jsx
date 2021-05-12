import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

export default function PaginationSeccion({slug}){
    const [pageIndex, setPageIndex] = useState(0);
    const { data } = useSWR(process.env.eConsultaSeccion+slug+"/"+pageIndex)
    if (!data) return (<div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>)
    const pNota = data.data.slice(0, 1)
    const eliminado = data.data.shift()
    const notas = data.data
    return(
        <>
            {pNota.map((notap, index) =>(
                <Link href={`/${notap.alias}`} key={index}>
                    <div className="card card-main-note text-white" >
                        <Image src={notap.uri.replace('public://', process.env.eConsultaImagenes)} className="card-img card-img-main-note lazyload" alt={notap.title} layout='fill' />
                        <div className="card-img-overlay card-title-main-note__article">
                            <h3 className="card-title-main-note__title">{notap.title}</h3>
                        </div>
                    </div>
                </Link>
            ))}
            <ul className="content-secciones">
                {notas.map((article, index) =>(
                    <li key={index}>
                        <article className="new new-summary invert" key={article.nid}>
                            <figure className="news-media">
                                <Link href={`/${article.alias}`}>
                                    <a>
                                        <Image className="lazyload" src={article.uri.replace('public://', process.env.eConsultaImagenes)} alt={article.title} layout='fill' />
                                    </a>
                                </Link>
                            </figure>
                            <div className="news-data">
                                <Link href={`/${article.alias}`}>
                                    <h1 className="news-title">{article.title}</h1>
                                </Link>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
            <nav aria-labelledby="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${pageIndex <= 0 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => setPageIndex(pageIndex - 1)}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => setPageIndex(pageIndex + 1)}>Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

export default function PaginationOpinion(){
    const [pageIndex, setPageIndex] = useState(0);
    const { data } = useSWR(process.env.eConsultaOpinionList+"/"+pageIndex)
    if (!data) return (<div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>)
    return(
        <>
            <nav aria-labelledby="Page navigation pagination-seccion-opinion" className="pagination-seccion-opinion">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${pageIndex <= 0 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => setPageIndex(pageIndex - 1)}>Anterior</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => setPageIndex(pageIndex + 1)}>Siguiente</a>
                    </li>
                </ul>
            </nav>
            <ul className="content-secciones">
                {data.data.map((article, index) =>(
                    <li key={index}>
                        <article className="new new-summary invert" key={article.nid}>
                            <figure className="news-media">
                                <Link href={`/${article.alias}`}>
                                    <a>
                                        <Image className="lazyload" src={article.img_url.replace('public://', process.env.eConsultaImagenes)} alt={article.title} layout='fill' />
                                    </a>
                                </Link>
                            </figure>
                            <div className="news-data">
                                <Link href={`/${article.url_alias}`}>
                                    <h1 className="news-title">{article.title}</h1>
                                </Link>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
            <nav aria-labelledby="Page navigation pagination-seccion-opinion" className="pagination-seccion-opinion">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${pageIndex <= 0 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => setPageIndex(pageIndex - 1)}>Anterior</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => setPageIndex(pageIndex + 1)}>Siguiente</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
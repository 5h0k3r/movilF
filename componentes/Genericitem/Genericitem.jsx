import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Genericitem({title, img, src, count, nid}) {
    return (
        <div className="virales" key={count}>
            {count == 0 ?
                (
                    <div className="card mb-2 fst-virales">
                        <div className="w-100">
                            <Link href={src}>
                                <a>
                                    <Image 
                                        src={img} 
                                        alt={title}
                                        layout="fill"
                                        key={nid}
                                        className="lazyload" data-sizes="auto"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="card-header news-data">
                            <Link href={src}>
                                <h1 className="news-title card-title">{title}</h1>
                            </Link>
                        </div>
                    </div>
                )
                :
                (
                    <article className="new new-summary invert" key={nid}>
                        <div className="news-data">
                            <Link href={src}>
                                <h1 className="news-title">{title}</h1>
                            </Link>
                        </div>
                        <figure className="news-media">
                            <Link href={src}>
                                <a>
                                    <Image src={img} alt={title} layout="fill" className="lazyload" data-sizes="auto"/>
                                </a>
                            </Link>
                        </figure>
                    </article>
                )
            }
        </div>
    )
}
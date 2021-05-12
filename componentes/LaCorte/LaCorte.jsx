import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

function LaCorte(){
    const { data, error } = useSWR(process.env.eConsultaCorte)
    if (!data) return <div>loading...</div>
    const corte = data.data
    return(
        <>
            {corte.map((info, index) =>(
                <div className="corte"  key={index}>
                    <div className="corte-head">
                        <Image src="/images/logo-corte.png" className="corte-logo lazyload" alt="Logo La Corte" width="110" height="50" />
                    </div>
                    <Link className="corte-link" href={info.link} target="_blank" rel="noopener">
                        <a>
                            <article className="corte-article text-center">
                                <Image
                                    src={info.img_file.replace('public://', process.env.eConsultaImagenes)}
                                    alt={info.title}
                                    width={320}
                                    height={192}
                                    className="lazyload"
                                />
                            </article>
                            <div className="corte-title text-white font-weight-bold p-5">
                                {info.title}
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </>
    )
}
export default LaCorte